import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import PageTag from "./PageTag";
import HeroHeadline from "./HeroHeadline";

export default function HeroContainer({
  tagText,
  title,
  desc,
  image = null,
  icon = null,
}) {
  return (
    <>
      <section className="relative z-30 overflow-hidden w-full  pt-8 max-md:pt-0 bg-whiteshade min-h-[calc(100vh-112px)] max-mobile-s5:flex max-mobile-s5:items-center">
        <section>
          <Wrapper animate="fade-up" properties="space-y-16 max-mobile-s5:pb-0">
            <div className="">
              <PageTag text={tagText} />
              <h1 className="capitalize heading text-7xl max-tablet-s3:text-5xl  max-w-5xl leading-20 max-tablet-s3:leading-16  max-mobile-s5:leading-10   text-drakbrown font-semibold heading">
                {title}.
              </h1>
            </div>
          </Wrapper>
          {icon ? (
            <HeroHeadline icon={icon} desc={desc} />
          ) : (
            <HeroHeadline image={image} desc={desc} />
          )}
        </section>
      </section>
    </>
  );
}
