import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";

export default function PagesRoute({}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/contact-us" element={<ContactPage />}></Route>
    </Routes>
  );
}
