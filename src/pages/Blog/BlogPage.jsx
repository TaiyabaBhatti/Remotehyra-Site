import React from "react";
import HeroContainer from "../Common/HeroContainer";
import SideBar from "./SideBar";
import Wrapper from "../../components/ui/Wrapper";
import BlogPostCarousel from "./Carousel/BlogPostCarousel";
import heroImage from "../../assets/images/service-hero-img.webp";

export default function BlogPage() {
  return (
    <>
      <HeroContainer
        tagText="Blog"
        title="Latest Insights"
        desc="Stay updated with the latest trends in AI and technology
          "
        image={heroImage}
      />

      <main className="bg-darkbrown">
        <Wrapper>
          <section className="flex flex-row gap-7 max-sm:flex-col">
            <SideBar />
            <BlogPostCarousel />
          </section>
        </Wrapper>
      </main>
    </>
  );
}
