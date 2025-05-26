import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import AboutPage from "../pages/About/AboutPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import ServicePage from "../pages/Service/ServicePage";
import BlogPage from "../pages/Blog/BlogPage";
import ServiceDetailedPage from "../pages/Service/DetailedPage/ServiceDetailedPage";
import ProjectDetailedPage from "../pages/Portfolio/DetailedPage/ProjectDetailedPage";
import BlogDetailedPage from "../pages/Blog/DetailedPage/BlogDetailedPage";

export default function PagesRoute({}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:serviceid" element={<ServiceDetailedPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route
        path="/portfolio/case-study/:projectid"
        element={<ProjectDetailedPage />}
      />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogid" element={<BlogDetailedPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
    </Routes>
  );
}
