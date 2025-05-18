import React from "react";
import SideImage from "../../assets/images/about-coordination-side-img.png";
import Wrapper from "../../components/ui/Wrapper";

export default function OurStrength() {
  return (
    <section>
      <Wrapper properties="max-w-6xl m-auto max-desktop-s4:max-w-4xl">
        <div className="flex flex-row">
          <div className="1/3">
            <img src={SideImage} alt="" />
          </div>
          <div className="flex-1">
            <div>
              <h4></h4>
              <p></p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
