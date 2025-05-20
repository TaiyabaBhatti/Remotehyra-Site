import React from "react";
import HeroContainer from "../Common/HeroContainer";
import Wrapper from "../../components/ui/Wrapper";
import services from "../../data/serviceProductData";
import ServiceProduct from "./ServiceCard";
import sideImage from "../../assets/images/service-side-img.png";

export default function ServicePage() {
  return (
    <>
      <section
        className={`relative w-full min-h-[calc(100vh-30px)]  pt-12 max-md:pt-0 overflow-hidden bg-whiteshade -z-50 
        `}
      >
        <HeroContainer
          tagText="our Services"
          title="AI you can trust, built for scale and security"
          desc="Cutting-edge AI solutions tailored to your business needs, AI agent resolves 60%+ of the issues Airtable users throw its way and is improving every day. It has been really impressive."
        />

        {/* Hero section bg effect */}
      </section>

      {/* Services grid */}

      <section className="relative overflow-hidden">
        <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl">
          <div className="grid grid-cols-2 gap-y-10 gap-x-12 max-md:grid-cols-1">
            {services.map((service, index) => {
              return (
                <ServiceProduct
                  key={index}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icons}
                  path={service.path}
                />
              );
            })}
          </div>
        </Wrapper>

        <img
          src={sideImage}
          alt=""
          className="absolute top-0 left-0 -z-10 w-full h-full object-cover blur-sm"
        />
      </section>
    </>
  );
}
