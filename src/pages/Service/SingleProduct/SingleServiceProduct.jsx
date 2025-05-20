import React from "react";
import HeroContainer from "../../Common/HeroContainer";
import Wrapper from "../../../components/ui/Wrapper";
import Headline from "../../../components/ui/Headline";
import BenefitCardCollection from "./BenefitCardCollection";
import sideImg from "../../../assets/images/single-page-side-img.png";
import sideImg2 from "../../../assets/images/single-page-side-img-2.png";
import SKillContainer from "./SKillContainer";
import ProcessCardCollection from "./ProcessCardCollection";

export default function SingleServiceProduct() {
  return (
    <>
      <section
        className={`relative w-full min-h-[calc(100vh-30px)]  pt-12 max-md:pt-0 overflow-hidden bg-whiteshade -z-50 
        `}
      >
        <HeroContainer
          tagText="Solutions"
          title="Machine Learning Solutions"
          desc="Our machine learning solutions help businesses leverage data to make better decisions, automate processes, and gain competitive advantages through predictive analytics."
        />

        {/* Hero section bg effect */}
      </section>

      <section className="bg-whiteshade min-h-screen">
        <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl ">
          {/* Benefits */}
          <div className="flex flex-row gap-x-10 items-center justify-between max-tablet-s3:flex-col-reverse max-tablet-s3:items-start">
            <BenefitCardCollection />

            <img
              src={sideImg}
              alt=""
              className="h-[450px] w-96 object-cover max-tablet-s3:hidden"
            />
          </div>

          <div className="mt-36 flex flex-row gap-x-16 items-center justify-between max-tablet-s3:flex-col-reverse max-tablet-s3:items-start">
            <img
              src={sideImg2}
              alt=""
              className="h-[550px] w-96 object-cover max-tablet-s3:hidden rounded-2xl"
            />
            <ProcessCardCollection />
          </div>
        </Wrapper>
      </section>

      {/* Skills */}
      <section className="bg-darkbrown min-h-screen">
        <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl">
          <Headline
            title="Skills"
            subtitle="Technologies we use"
            classTitle="section-black"
          />
          <SKillContainer />
        </Wrapper>
      </section>
    </>
  );
}
