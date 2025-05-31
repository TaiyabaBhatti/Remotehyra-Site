import Wrapper from "../../components/ui/Wrapper";
import ProjectCarousel from "./Carousel/ProjectCarousel";
import ExpertiseSection from "./ExpertiseSection";
import Headline from "../../components/ui/Headline";
import SectionContent from "./SectionContent";
import SolutionCards from "./SolutionCards";
import bgImage from "../../assets/images/home-bg-2.webp";
import Button from "../../components/ui/Button";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const sectionRef = useRef();
  const [scrollStatus, setScrollStatus] = useState(false);

  useEffect(() => {
    const scrollFunc = () => {
      const section = sectionRef.current;
      const visibleWindowHeight = window.innerHeight;

      const sectionViewPortPara = section.getBoundingClientRect();
      const sectionBottom = sectionViewPortPara.bottom;

      if (sectionBottom <= window.innerHeight - 400) {
        setScrollStatus(true);
      } else {
        setScrollStatus(false);
      }
      console.log("section top", section.offsetTop);
      console.log("section top", section.getBoundingClientRect().y);
    };

    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, [scrollStatus]);

  return (
    <>
      {/* Hero section */}

      <section
        ref={sectionRef}
        className="relative min-h-[calc(100vh-112px)] flex items-center overflow-hidden  gap-x-10"
      >
        <section className="flex-1">
          <SectionContent
            title=" Empowering Businesses with AI Solutions"
            desc=" Transform your business with our innovative AI-driven solutions."
            classTitle="section-white"
            btnText="Explore now"
            btnDecor="bg-gradient-to-r from-pink-500 to-violet-500  text-white"
            properties="max-tablet-s3:items-center"
          />
        </section>
        <img src={bgImage} alt="" className="max-tablet-s3:hidden" />

        <div
          className={`absolute w-full h-full z-40 transition-transform ease-out duration-500 bottom-0 left-0 
          

        ${
          scrollStatus
            ? "bg-gradient-to-t from-pink-500 to-violet-500 translate-y-0"
            : "translate-y-full"
        }`}
        ></div>
      </section>

      {/* Experties */}
      <ExpertiseSection />

      {/* AI solutions  */}
      <Wrapper properties="pt-24">
        <Headline
          title="AI Solutions We Build"
          subtitle="Transforming businesses with cutting-edge AI technology"
        />
        <div
          className={`relative grid grid-cols-3 max-desktop-lg3:grid-cols-2 max-md:grid-cols-1 max-md:gap-x-0  gap-x-10 gap-y-16 h-full  mt-36`}
        >
          {/* row-1 */}

          <div className="relative">
            <SolutionCards
              title="Financial Assistance"
              desc="Smart AI-powered financial advice and management"
              properties=" relative before:content-['1'] "
              slideDelay="200"
            />
          </div>
          <div className="md:block hidden">{/* Empty */}</div>
          <div className="relative col-start-3 col-end-4 max-md:col-start-1  max-desktop-lg3:col-start-2 max-desktop-lg3:row-start-2">
            <SolutionCards
              title="Learning Academies"
              desc="Personalized educational platforms powered by AI"
              properties="relative before:content-['2'] "
              slideDelay="350"
            />
          </div>

          {/* row-2 */}

          <div className="md:block hidden">{/* Empty */}</div>
          <div className="relative col-start-2 col-end-3 row-start-2 max-desktop-lg3:col-start-1 max-desktop-lg3:col-end-2 max-desktop-lg3:row-start-3 max-md:col-start-1 ">
            <SolutionCards
              title="AI Tutors"
              desc="One-on-one learning experience with AI mentors"
              properties="before:content-['3'] relative "
              slideDelay="500"
            />
          </div>
          <div className="md:block hidden">{/* Empty */}</div>

          {/* row-3 */}

          <div className="max-md:col-start-1  relative  col-start-1 col-end-2 row-start-3 max-desktop-lg3:col-start-2 max-desktop-lg3:row-start-4">
            <SolutionCards
              title="Voice Agents"
              desc="Natural voice interactions for seamless communication"
              properties=" relative before:content-['4'] "
              slideDelay="650"
            />
          </div>
          <div className="md:block hidden">{/* Empty */}</div>
          <div className="max-md:col-start-1  relative col-start-3 col-end-4 row-start-3 max-desktop-lg3:col-start-1 max-desktop-lg3:col-end-2  max-desktop-lg3:row-start-5">
            <SolutionCards
              title="Customer Service Agent"
              desc="24/7 automated support with human-like interactions"
              properties="relative before:content-['5'] "
              slideDelay="800"
            />
          </div>

          {/* Bg-effect */}

          <div className="max-sm:hidden w-full flex justify-center m-auto absolute top-0 -z-50 ">
            <svg
              className="w-[540px]"
              viewBox="0 0 486 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="255"
                cy="235"
                r="230.5"
                stroke="#C4C4C4"
                strokeDasharray="8 8"
              ></circle>
              <path
                d="M136 0C61.3782 0 9.46912e-08 62.2808 2.09814e-07 138C45.3156 138 90.6844 138 136 138C136 92.018 136 45.982 136 0Z"
                fill="#6BDAB6"
              ></path>
              <mask
                id="svg_d5717f16-4986-4a8b-aa92-3bfde9daded5_mask0_903:2074"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="339"
                y="339"
                width="133"
                height="131"
              >
                <path
                  d="M471.506 404.5C471.506 368.325 441.843 339 405.253 339C368.662 339 339 368.325 339 404.5C339 440.675 368.662 470 405.253 470C424.851 470 471.506 470 471.506 470C471.506 470 471.506 421.299 471.506 404.5Z"
                  fill="#68E0F7"
                ></path>
              </mask>
              <g mask="url(#svg_d5717f16-4986-4a8b-aa92-3bfde9daded5_mask0_903:2074)">
                <rect
                  x="471.505"
                  y="474.812"
                  width="133.628"
                  height="156.078"
                  transform="rotate(-180 471.505 474.812)"
                  fill="#66E0F6"
                ></rect>
              </g>
            </svg>
          </div>
        </div>
      </Wrapper>

      {/* Featured section */}
      <Wrapper properties="pt-24">
        <Headline
          title="Our Latest AI Solutions"
          subtitle="Transforming businesses with cutting-edge AI technology"
        />
        <ProjectCarousel />
      </Wrapper>

      {/* Get in Touch */}

      <section className="bg-darkbrown ">
        <SectionContent
          title="Ready to Transform Your Business with AI Solutions?"
          desc="Let's discuss how we can help you achieve your business goals with our
          cutting-edge technology solutions."
          btnDecor="bg-darkbrown text-white border-[1px] hover:bg-white hover:text-black"
          btnText="get started"
          classTitle="section-black"
          center={true}
        />
      </section>
    </>
  );
}
