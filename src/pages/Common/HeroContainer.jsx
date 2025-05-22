import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import PageTag from "./PageTag";
import HeroHeadline from "./HeroHeadline";

export default function HeroContainer({ tagText, title, desc, icon }) {
  return (
    <Wrapper properties="max-w-6xl z-50  m-auto">
      <PageTag text={tagText} />
      <HeroHeadline title={title} desc={desc} icon={icon} />
    </Wrapper>
  );
}
