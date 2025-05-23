import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { projects } from "../../../data/homePageData";
import ContentLayout from "../ContentLayout";
import Tag from "../../../components/ui/Tag";

export default function ProjectCarousel() {
  return (
    <>
      <Swiper
        className="max-w-6xl !flex flex-row  justify-between items-center gap-10 mt-20"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={false}
        pagination={{ clickable: true }}
        effect={"flip"}
        grabCursor={false}
        spaceBetween={30}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex mb-10 flex-row justify-center  gap-x-5  gap-y-10 items-center max-md:flex-col-reverse max-md:items-start">
                <ContentLayout
                  title={project.title}
                  element={<Tag text={project.tag} />}
                  classTitle="section-white section-home-carousel"
                  subtitle={project.desc}
                  btn_text="View Case Study"
                  btnDecor="border-[1px] bg-transparent text-black hover:bg-linear-to-r hover:from-[#BC01FF] hover:to-[#46178f] hover:text-white  hover:border-0"
                />

                <div className=" m-auto max-md:w-full">
                  <img
                    src={project.image}
                    alt=""
                    className="max-w-[480px] max-desktop-s3:max-w-[450px] max-desktop-s2:max-w-[370px] h-96 max-desktop-s2:h-80  max-md:max-w-full max-md:w-full rounded-3xl hover:opacity-80"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
