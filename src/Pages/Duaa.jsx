import { useEffect, useState, useRef } from "react";
import InputAdd from "../Components/InputAdd";
import Card from "../Components/Card";

const initValDuaa = localStorage.getItem("duaa")
  ? JSON.parse(localStorage.getItem("duaa"))
  : [];

const Duaa = () => {
  const [duaa, setDuaa] = useState(initValDuaa);
  const inputRef = useRef(null);

  // Save Changes Duaa List In LocalStorage

  useEffect(() => {
    localStorage.setItem("duaa", JSON.stringify(duaa));
  }, [duaa]);

  //Func To Add Item To Duaa List
  const handelAdd = function (e) {
    let item = {
      id: `D-${Math.random()}`,
      name: e,
    };
    setDuaa((prev) => [...prev, item]);
    inputRef.current.value = "";
  };
  //Func To Delet Item From Duaa List
  const handelDelet = function (e) {
    let newArr = duaa.filter((ele) => ele.id !== e);
    setDuaa(newArr);
  };

  if (!duaa) {
    return <p>لا يَرُدُّ القدرَ إلا الدعاءُ</p>;
  }

  return (
    <article
      className="w-9/10 min-w-[310px] p-2.5 flex flex-col items-center gap-5 my-24"
    >
      <InputAdd inputRef={inputRef} Add={handelAdd} Word={"أضف"} />
      {duaa.length == 0 ? (
        <p className="font-medium text-7xl my-20 max-md:text-4xl">
          لا يَرُدُّ القدرَ إلا الدعاءُ
        </p>
      ) : (
        <ul className="flex gap-2.5 justify-center flex-wrap w-4/5 min-w-[300px] p-2">
          {duaa.map((item, index) => (
            <Card key={index} content={item.name}>
              <button
                className="p-2 bg-[var(--primary-color)] rounded-xl text-[var(--text-color-light)] shadow-[var(--shadow)] hover:bg-[var(--accent-color)] hover:text-[var(--text-color-dark)] transition-colors"
                onClick={() => handelDelet(item.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </Card>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Duaa;
