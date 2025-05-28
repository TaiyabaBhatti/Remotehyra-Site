import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import PageTag from "./PageTag";
import HeroHeadline from "./HeroHeadline";

export default function HeroContainer({
  tagText,
  title,
  desc,
  icon,
  animateElement = null,
}) {
  return (
    <>
      <section className="relative overflow-hidden w-full  pt-12 max-md:pt-0 bg-whiteshade -z-50 min-h-screen ">
        <Wrapper animate="fade-up">
          <PageTag text={tagText} />
          <HeroHeadline title={title} desc={desc} icon={icon} />
        </Wrapper>

        {animateElement && (
          <img
            data-aos="fade-right"
            loading="lazy"
            src={animateElement}
            alt={`decorative piece for visual appealing`}
            className={`max-tablet-s3:hidden absolute bottom-24 -z-10 left-20 object-cover w-72 blur-xs transition-transform duration-1000 ease-out
       `}
          />
        )}
      </section>
    </>
  );
}
