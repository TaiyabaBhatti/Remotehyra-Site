import React, { useEffect, useState } from "react";
import HeroContainer from "../../Common/HeroContainer";
import Wrapper from "../../../components/ui/Wrapper";
import Headline from "../../../components/ui/Headline";
import BenefitCardCollection from "../../Common/CardCollection";
import sideImg2 from "../../../assets/images/single-page-side-img-2.webp";
import SkillCardCollection from "./SkillCardCollection";
import ProcessCardCollection from "./ProcessCardCollection";
import services from "../../../data/serviceDetailedData";
import { useParams } from "react-router-dom";

export default function SingleServiceProduct() {
  const { serviceid } = useParams();
  const [pageData, setPageData] = useState();

  useEffect(() => {
    setPageData(services.find((service, index) => service.id === serviceid));
  }, [serviceid]);

  return (
    <>
      {pageData && (
        <>
          <section
            className={`relative w-full pt-12 max-md:pt-0 overflow-hidden bg-whiteshade  min-h-screen 
        `}
          >
            <HeroContainer
              tagText="Solutions"
              title={pageData.title}
              desc={pageData.data.desc}
              icon={pageData.icons}
            />

            {/* Hero section bg effect */}
          </section>

          {/* Benefits and our Process */}
          <section className="bg-whiteshade">
            <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl ">
              {/* Benefits */}
              <BenefitCardCollection dataList={pageData.data.benefitList} />

              {/* Process */}
              <div className="mt-36 flex flex-row gap-x-16 items-center justify-between max-desktop-s4:flex-col gap-y-10 max-tablet-s3:items-start">
                <img
                  src={sideImg2}
                  alt=""
                  className="h-[550px] w-96 object-cover max-desktop-s4:w-full max-desktop-s4:h-52 rounded-2xl "
                />
                <ProcessCardCollection dataList={pageData.data.processList} />
              </div>
            </Wrapper>
          </section>

          {/* Skills */}
          <section className="bg-darkbrown ">
            <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl">
              <Headline
                title="Skills"
                subtitle="Technologies we use"
                classTitle="section-black"
              />
              <SkillCardCollection dataList={pageData.data.skillList} />
            </Wrapper>
          </section>
        </>
      )}
    </>
  );
}
