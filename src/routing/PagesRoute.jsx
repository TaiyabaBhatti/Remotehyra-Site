import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

export default function PagesRoute({}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}
