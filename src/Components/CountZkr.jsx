const CountZkr = ({ counter, choice, setCounter, index }) => {
  const ChaneCount = (index, type) => {
    const key = choice === "masaa" ? "countEvening" : "countMorning";
    setCounter((prev) => {
      const newArr = [...prev];
      newArr[index] = {
        ...newArr[index],
        [key]: Math.max(
          0,
          type === "incre" ? newArr[index][key] + 1 : newArr[index][key] - 1
        ),
      };
      return newArr;
    });
  };

  return (
    <ul className="flex gap-5 font-black text-xl items-center">
      <li
        onClick={() => ChaneCount(index, "decre")}
        className="cursor-pointer bg-[var(--accent-color)] text-[var(--text-color-dark)] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--primary-color)] hover:text-[var(--text-color-light)] transition-colors"
      >
        -
      </li>
      <li className="text-[var(--primary-color)] count">
        {choice === "masaa"
          ? counter[index]?.countEvening
          : counter[index]?.countMorning}
      </li>
      <li
        onClick={() => ChaneCount(index, "incre")}
        className="cursor-pointer bg-[var(--accent-color)] text-[var(--text-color-dark)] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--primary-color)] hover:text-[var(--text-color-light)] transition-colors"
      >
        +
      </li>
    </ul>
  );
};

export default CountZkr;
