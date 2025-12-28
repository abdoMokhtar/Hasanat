import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

export const useData = () => useContext(DataContext);
