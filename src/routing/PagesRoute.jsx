import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import AboutPage from "../pages/About/AboutPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import ServicePage from "../pages/Service/ServicePage";
import BlogPage from "../pages/Blog/BlogPage"


export default function PagesRoute({}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/services" element={<ServicePage/>}/>
      <Route path="/portfolio" element={<PortfolioPage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/contact-us" element={<ContactPage />}/>
    </Routes>
  );
}
