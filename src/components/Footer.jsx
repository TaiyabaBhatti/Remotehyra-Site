import LogoBox from "./ui/LogoBox";
import PolicyLink from "./ui/PolicyLink";
import SocialHandles from "./ui/SocialHandles";
import ServiceLink from "./ui/ServiceLink";

export default function Footer({}) {
  return (
    <footer className="bg-white mt-10 same-spacing  py-9 px-5 rounded-tl-lg rounded-tr-lg max-w-6xl max-desktop-s4:max-w-4xl max-mobile-s1:w-full m-auto space-y-5">
      <div className="flex flex-row justify-between gap-5 flex-wrap max-tablet-lg2:flex-col">
        <LogoBox
          text_size="text-[21px]"
          logo_size="size-10"
          properties="flex-col"
          element="true"
        />

        <div className="flex flex-row gap-x-8 gap-y-5   h-fit items-center max-tablet-lg2:flex-col max-tablet-lg2:mt-5 max-tablet-lg2:items-start">
          <div className="flex flex-row max-md:flex-col max-tablet-s1:gap-y-0.5  gap-x-5">
            <ServiceLink
              text="Machine Learning"
              path="/services/machine-learning"
            />
            <ServiceLink
              text="Natural Language Processing"
              path="/services/natural-language-processing"
            />
            <ServiceLink
              text="Computer Vision"
              path="/services/computer-vision"
            />
            <ServiceLink
              text="Custom AI Solutions"
              path="/services/ai-consulting"
            />
          </div>
          <SocialHandles />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-10 flex-wrap max-md:flex-col-reverse max-mobile-s1:mt-5 max-mobile-s1:gap-y-2">
        <p className="text-gray-500 font-semibold text-[13px]  ">
          Remotehyra © All Rights Reserved
        </p>

        <div className="flex flex-row gap-x-8  items-start flex-wrap">
          <PolicyLink text="Contact" path="/contact-us" />
          <PolicyLink text="FAQ" path="/" />
          <PolicyLink text="Careers" path="/" />
          <PolicyLink text="Partners" path="/" />
          <PolicyLink text="Integrations" path="/" />
          <PolicyLink text="Security" path="/" />
        </div>
      </div>
    </footer>
  );
}
