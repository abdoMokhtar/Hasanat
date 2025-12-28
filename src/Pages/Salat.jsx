import { useEffect, useState, useRef } from "react";
import InputAdd from "../Components/InputAdd";
import Card from "../Components/Card";

const Salat = () => {
  const inputRef = useRef(null);
  const [city, setCity] = useState("القاهره");
  const [date, setDate] = useState([]);
  const [filteredTimings, setFilteredTimings] = useState({});
  const prayerNames = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];

  const convertTo12Hour = (time24) => {
    const [hour, minute] = time24.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress?address=${city}&method=5`
        );
        const data = await res.json();
        const { Fajr, Dhuhr, Asr, Maghrib, Isha } = data.data.timings;
        setFilteredTimings({ Fajr, Dhuhr, Asr, Maghrib, Isha });
        setDate([data.data.date.hijri.date, data.data.date.readable]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, [city]);

  return (
    <article className="w-9/10 min-w-[310px] p-2.5 flex flex-col items-center gap-5 my-24">
      <ul className="flex w-full max-w-2xl justify-around flex-wrap bg-[var(--card-background)] p-4 rounded-xl shadow-[var(--shadow)]">
        <li className="font-bold text-[var(--primary-color)]">{date[0]}</li>
        <li className="text-[var(--accent-color)] font-black text-2xl">
          {city.toUpperCase()}
        </li>
        <li className="font-bold text-[var(--primary-color)]">{date[1]}</li>
      </ul>
      <InputAdd inputRef={inputRef} Add={setCity} Word={"ابحث"} />

      <ul className="p-2.5 flex flex-col gap-5 items-center grow w-9/10">
        {Object.values(filteredTimings).map((e, index) => (
          <Card key={index} content={prayerNames[index]}>
            <span className="text-[var(--primary-color)] font-bold text-lg">{convertTo12Hour(e)}</span>
          </Card>
        ))}
      </ul>
    </article>
  );
};

export default Salat;
