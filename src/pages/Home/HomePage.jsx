import Button from "../../components/ui/Button";
import Wrapper from "../../components/ui/Wrapper";
import ProjectCarousel from "./Carousel/ProjectCarousel";
import ExpertiseSection from "./ExpertiseSection";
import FeatureSection from "./FeatureSection";
import HomeHeadline from "./HomeHeadline";
import SectionContent from "./SectionContent";
import { FcHeadset } from "react-icons/fc";
import SolutionCards from "./SolutionCards";


export default function HomePage() {
  return (
    <>
      {/* Hero section */}

      <SectionContent
        title=" Empowering Businesses with AI Solutions"
        subtitle=" Transform your business with our innovative AI-driven solutions."
        classTitle="section-white"
        btnText="Explore now"
        screenWidth="max-desktop-s1"
        src="https://forethought.ai/wp-content/uploads/2021/10/homepage-hero.png"
        svgElement={
          <svg
            className="w-250 h-170"
            viewBox="0 0 951 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 552L45.0001 455.999C45.0001 422.862 71.863 395.999 105 395.999L150.764 395.999L215.032 395.999C248.325 395.999 275.252 368.892 275.031 335.6L274.681 282.97L274.681 150.701L274.681 105C274.681 71.8629 301.544 45 334.681 45L590.34 45L906 45"
              stroke="url(#paint0_linear_903:2012)"
              strokeWidth="90"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_903:2012"
                x1="461.739"
                y1="53.9753"
                x2="462.552"
                y2="548.371"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#6BDAB6"></stop>
                <stop offset="1" stopColor="#66E0F6"></stop>
              </linearGradient>
            </defs>
          </svg>
        }
      />

      {/* Experties */}
      <ExpertiseSection />

      {/* AI solutions  */}

      <Wrapper properties="mb-20">
      <HomeHeadline title="AI Solutions We Build" subtitle="Transforming businesses with cutting-edge AI technology"/>
{/* <div className="flex flex-row mt-20">
    <div className="">
        <FcHeadset className="text-5xl"/>
<h1 className="font-bold text-2xl">Financial Assistance</h1>
<p className="text-[20px]">AI-powered financial advice and management</p>
    </div>

    <div>
    </div>
</div> */}


<div className="relative grid grid-cols-3 max-desktop-lg3:grid-cols-2 max-md:grid-cols-1 max-md:gap-x-0  gap-x-10 gap-y-16 w-full h-full mt-36">          
{/* row-1 */}

            <div className="relative">
              <SolutionCards
                title="Financial Assistance"
                desc="Smart AI-powered financial advice and management"
                properties=" relative before:content-['1'] "
              />
            </div>
            <div className="md:block hidden">{/* Empty */}</div>
            <div className="relative col-start-3 col-end-4 max-md:col-start-1  max-desktop-lg3:col-start-2 max-desktop-lg3:row-start-2">
              <SolutionCards
                title="Learning Academies"
                desc="Personalized educational platforms powered by AI"
                properties="relative before:content-['2'] "
              />
            </div>

{/* row-2 */}

<div className="md:block hidden">{/* Empty */}</div>
<div className="relative col-start-2 col-end-3 row-start-2 max-desktop-lg3:col-start-1 max-desktop-lg3:col-end-2 max-desktop-lg3:row-start-3 max-md:col-start-1 ">
            <SolutionCards
              title="AI Tutors"
              desc="One-on-one learning experience with AI mentors"
              properties="before:content-['3'] relative "
            />
            
          </div>
<div className="md:block hidden">{/* Empty */}</div>

{/* row-3 */}

<div className="max-md:col-start-1  relative  col-start-1 col-end-2 row-start-3 max-desktop-lg3:col-start-2 max-desktop-lg3:row-start-4">
              <SolutionCards
                title="Voice Agents"
                desc="Natural voice interactions for seamless communication"
                properties=" relative before:content-['4'] "
              />
            </div>
            <div className="md:block hidden">{/* Empty */}</div>
            <div className="max-md:col-start-1  relative col-start-3 col-end-4 row-start-3 max-desktop-lg3:col-start-1 max-desktop-lg3:col-end-2  max-desktop-lg3:row-start-5">
              <SolutionCards
                title="Customer Service Agent"
                desc="24/7 automated support with human-like interactions"
                properties="relative before:content-['5'] "
              />
            </div>

{/* Bg-effect */}
  
<div className="absolute top-0 -z-50 max-md:left-0 left-[30%]">
    <svg width="486" height="470" viewBox="0 0 486 470" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="255" cy="235" r="230.5" stroke="#C4C4C4" strokeDasharray="8 8"></circle>
<path d="M136 0C61.3782 0 9.46912e-08 62.2808 2.09814e-07 138C45.3156 138 90.6844 138 136 138C136 92.018 136 45.982 136 0Z" fill="#6BDAB6"></path>
<mask id="svg_d5717f16-4986-4a8b-aa92-3bfde9daded5_mask0_903:2074" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="339" y="339" width="133" height="131">
<path d="M471.506 404.5C471.506 368.325 441.843 339 405.253 339C368.662 339 339 368.325 339 404.5C339 440.675 368.662 470 405.253 470C424.851 470 471.506 470 471.506 470C471.506 470 471.506 421.299 471.506 404.5Z" fill="#68E0F7"></path>
</mask>
<g mask="url(#svg_d5717f16-4986-4a8b-aa92-3bfde9daded5_mask0_903:2074)">
<rect x="471.505" y="474.812" width="133.628" height="156.078" transform="rotate(-180 471.505 474.812)" fill="#66E0F6"></rect>
</g>
</svg></div> 

</div>  

       

      </Wrapper>




      {/* Featured section */}
      <Wrapper properties="space-y-16">
        <ProjectCarousel />
      </Wrapper>

      <SectionContent
        title="Ready to Transform Your Business with
        AI Solutions?"
        subtitle="Let's discuss how we can help you achieve your business goals with our cutting-edge technology solutions."
        screenWidth="max-desktop-lg3"
        classTitle="section-black"
        btnText="Get Started"
        src="https://forethought.ai/wp-content/uploads/2021/10/homepage-hero.png"
        svgElement={
          <svg
            className="w-250 h-170"
            viewBox="0 0 951 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 552L45.0001 455.999C45.0001 422.862 71.863 395.999 105 395.999L150.764 395.999L215.032 395.999C248.325 395.999 275.252 368.892 275.031 335.6L274.681 282.97L274.681 150.701L274.681 105C274.681 71.8629 301.544 45 334.681 45L590.34 45L906 45"
              stroke="url(#paint0_linear_903:2012)"
              strokeWidth="90"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_903:2012"
                x1="461.739"
                y1="53.9753"
                x2="462.552"
                y2="548.371"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#6BDAB6"></stop>
                <stop offset="1" stopColor="#66E0F6"></stop>
              </linearGradient>
            </defs>
          </svg>
        }
      />
    </>
  );
}









        