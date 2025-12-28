/* eslint-disable react-hooks/exhaustive-deps */

import Card from "../Components/Card.jsx";
import SwitchAzkar from "../Components/SwitchAzkar";
import { useData } from "../hooks/UseData.js";
import { useEffect, useState } from "react";
import CountZkr from "../Components/CountZkr.jsx";

const init = localStorage.getItem("choiceZkr")
  ? localStorage.getItem("choiceZkr")
  : "";

const initValCount = localStorage.getItem("countZkr")
  ? JSON.parse(localStorage.getItem("countZkr"))
  : [];

const Azkar = () => {
  const { azkar, loading, Spinner } = useData();
  const [choice, setChoice] = useState(init);
  const [counter, setCounter] = useState(initValCount);

  // Set Zkr Choice In LocalStorage
  useEffect(() => {
    localStorage.setItem("choiceZkr", choice);
  }, [choice]);

  // Initial  Zkr Counter  In LocalStorage

  function resetZkrCount() {
    if (!azkar[1]?.content?.length) return;

    const countArr = Array.from({ length: azkar[1].content.length }, () => ({
      countMorning: 0,
      countEvening: 0,
    }));

    setCounter(countArr);
  }

  //Check Time Every Minute To Reset Zkr Counter At Current Time
  useEffect(() => {
    function runDailyTask() {
      const now = new Date();
      const targetHour = 12;
      const targetMinute = 0;

      if (now.getHours() === targetHour && now.getMinutes() === targetMinute) {
        resetZkrCount();
      }
    }

    const interval = setInterval(runDailyTask, 30000);

    return () => clearInterval(interval);
  }, [azkar]);

  // Check And Add Initial Value in LocalStorage
  useEffect(() => {
    if (initValCount.length === 0 && azkar[1]?.content?.length > 0) {
      resetZkrCount();
    }
  }, [azkar, initValCount]);

  // Set Zkr Counter In LocalStorage When Change Counter

  useEffect(() => {
    localStorage.setItem("countZkr", JSON.stringify(counter));
  }, [counter]);

  // Condition Show Loading

  if (loading || !azkar) {
    return Spinner();
  }
  return (
    <>
      <article className="w-4/5 flex justify-center items-center gap-5 flex-wrap my-24">
        <SwitchAzkar setChoice={setChoice} />
        {azkar[choice == "sabah" ? 0 : 1].content.map((zkr, index) => (
          <Card
            key={index}
            content={zkr.zekr}
            repeat={`التكرار: ${zkr.repeat}`}
            className={"flex-col text-center gap-8 p-4"}
          >
            <CountZkr
              repeat={zkr.repeat}
              counter={counter}
              choice={choice}
              setCounter={setCounter}
              index={index}
            />
          </Card>
        ))}
      </article>
    </>
  );
};

export default Azkar;
