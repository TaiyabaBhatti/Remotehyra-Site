import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { blogPost } from "../../../data/blogPostData";
import BlogCard from "./BlogCard";

export default function BlogPostCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        id="blog-carousel"
        slidesPerView={2}
        grid={{ rows: 2, fill: "row" }}
        pagination={pagination}
        modules={[Grid, Pagination]}
        className="w-full !h-full !pb-20 "
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },

          640: {
            slidesPerView: 1,
            grid: {
              rows: 2,
              fill: "row",
            },
          },

          520: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
          872: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
      >
        {blogPost.map((blog) => {
          return (
            <SwiperSlide className="!h-fit" key={blog.id}>
              <BlogCard data={blog} path={`/blog/${blog.id}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
