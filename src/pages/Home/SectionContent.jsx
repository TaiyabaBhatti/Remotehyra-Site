import React from "react";
import Button from "../../components/ui/Button";
import Wrapper from "../../components/ui/Wrapper";

export default function SectionContent({
  title,
  desc,
  src,
  btnText,
  btnDecor,
  classTitle,
  center = false,
  properties,
}) {
  return (
    <Wrapper>
      <div
        data-aos="zoom-in"
        className={`${classTitle}  flex flex-col  same-spacing max-tablet-s3:items-center ${
          center ? " items-center" : "items-start "
        }  mt-8  pl-10 max-tablet-lg2:pl-7 gap-y-8  max-tablet-lg2:max-w-full `}
      >
        <h1
          className={`text-5xl 
          leading-16
          max-mobile-s5:leading-10
          max-tablet-s3:text-center  text-darkbrown font-bold heading ${
            center ? "text-center" : ""
          }`}
        >
          {title}
        </h1>
        <p
          className={`desc text-xlg max-tablet-s3:text-center font-semibold ${
            center ? "text-center" : ""
          }`}
        >
          {desc}
        </p>
        <Button text={btnText} properties={btnDecor} />
      </div>
    </Wrapper>
  );
}
