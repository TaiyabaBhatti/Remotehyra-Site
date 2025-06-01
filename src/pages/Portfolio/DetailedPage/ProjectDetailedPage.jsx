import React, { useEffect, useState } from "react";
import projects from "../../../data/portfolioDetailedData";
import { useParams } from "react-router-dom";
import Wrapper from "../../../components/ui/Wrapper";
import HeroContainer from "../../Common/HeroContainer";
import FeatureCardCollection from "../../Common/CardCollection";
import ColoredBorderCard from "../../../components/ui/ColoredBorderCard";
import { FcHighPriority } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";

export default function ProjectDetailedPage() {
  const { projectid } = useParams();
  const [pageData, setPageData] = useState();

  useEffect(() => {
    setPageData(projects.find((project) => project.id === projectid));
  }, [projectid]);

  return (
    <>
      {pageData && (
        <>
          <section
            className={`relative w-full pt-12 max-md:pt-0 overflow-hidden bg-whiteshade -z-50 min-h-screen 
        `}
          >
            <HeroContainer
              tagText={pageData.tag}
              title={pageData.title}
              desc={pageData.data.desc}
              image={pageData.thumbnail}
            />

            {/* Hero section bg effect */}
          </section>

          <section className="bg-darkbrown">
            <Wrapper>
              <div className="flex flex-col items-center gap-y-10">
                <ColoredBorderCard>
                  <div>
                    <FcHighPriority className="text-7xl max-sm:text-5xl" />
                  </div>

                  <div className="space-y-2.5">
                    <h1 className="text-2xl text-white font-bold">
                      Challenges
                    </h1>
                    <p className="text-white">
                      {pageData.data.targetPair.challenge}
                    </p>
                  </div>
                </ColoredBorderCard>

                <ColoredBorderCard>
                  <div>
                    <FcIdea className="text-7xl max-sm:text-5xl" />
                  </div>

                  <div className="space-y-2.5">
                    <h1 className="text-2xl text-white font-bold">Solutions</h1>
                    <p className="text-white">
                      {pageData.data.targetPair.solution}
                    </p>
                  </div>
                </ColoredBorderCard>
              </div>
            </Wrapper>
          </section>

          {/* Features*/}
          <section className="bg-whiteshade">
            <Wrapper>
              <FeatureCardCollection
                dataList={pageData.data.featureList}
                tag="feature"
              />
            </Wrapper>
          </section>
        </>
      )}
    </>
  );
}
