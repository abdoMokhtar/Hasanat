/* eslint-disable no-unused-vars */
import { useEffect, useState, createContext, useContext, memo } from "react";

export const DataContext = createContext();

const initialVal = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [];

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-40">
      <div className="w-10 h-10 border-4 border-amber-700 border-t-transparent rounded-full animate-spin"></div>
      <p className="font-medium ">دقيقه نستدعي البيانات</p>
    </div>
  );
};
const DataProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);
  const [azkar, setAzkar] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check Updeate LocalStorage And Set Data In States

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("data")) || null;

    if (local && local.version) {
      setLessons(local.lessons || []);
      setAzkar(local.azkar || []);
      setLoading(false);
    }

    async function fetchData() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();

        if (!local || local.version !== data.version) {
          localStorage.setItem("data", JSON.stringify(data));
          setLessons(data.lessons || []);
          setAzkar(data.azkar || []);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ lessons, azkar, loading, Spinner }}>
      {children}
    </DataContext.Provider>
  );
};

export default memo(DataProvider);

// export function useData() {
//   return useContext(DataContext);
// }
