import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home.jsx";
import Lessons from "../Pages/Lessons.jsx";
import Series from "../Pages/Series.jsx";
import Azkar from "../Pages/Azkar.jsx";
import Salat from "../Pages/Salat.jsx";
import Duaa from "../Pages/Duaa.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "lessons", element: <Lessons /> },
      { path: "salat", element: <Salat /> },
      { path: "duaa", element: <Duaa /> },
      { path: "azkar", element: <Azkar /> },
      { path: "lessons/series/:seriesId", element: <Series /> },
    ],
  },
]);

export default router;
