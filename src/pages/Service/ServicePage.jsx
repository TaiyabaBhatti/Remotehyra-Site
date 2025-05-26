import React from "react";
import HeroContainer from "../Common/HeroContainer";
import Wrapper from "../../components/ui/Wrapper";
import services from "../../data/serviceDetailedData";
import ServiceCard from "./ServiceCard";
import sideImage from "../../assets/images/service-side-img.png";

export default function ServicePage() {
  return (
    <>
      <HeroContainer
        tagText="our Services"
        title="AI you can trust, built for scale and security"
        desc="Cutting-edge AI solutions tailored to your business needs, AI agent resolves 60%+ of the issues Airtable users throw its way and is improving every day. It has been really impressive."
      />

      {/* Services grid */}

      <section className="relative overflow-hidden bg-darkbrown">
        <Wrapper>
          <div className="grid grid-cols-2 gap-y-10 gap-x-12 max-md:grid-cols-1">
            {services.map((service, index) => {
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  desc={service.desc}
                  icon={service.icons}
                  path={`/services/${service.id}`}
                />
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
