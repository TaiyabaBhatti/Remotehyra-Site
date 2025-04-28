import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/bundle"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { projects } from '../../../data/homePageData'
import ContentLayout from '../ContentLayout'
import Tag from '../../../components/ui/Tag';


export default function ProjectCarousel() {
  return (
    <Swiper 
    className="w-full !flex flex-row  justify-between items-center gap-10"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    navigation={false}
    pagination={{clickable:true}}
    effect={"flip"}
    grabCursor={true}
    spaceBetween={30}
    >
{
    projects.map((project,index)=>{
        return (
            <SwiperSlide key={index}>
                <div className='flex flex-row justify-center max-tablet-lg1:flex-col-reverse  gap-x-5 gap-y-10 items-center'>
        
               <ContentLayout  title={project.title} element={(<Tag text={project.tag}/>)} classTitle="section-white section-home-carousel"  subtitle={project.desc} btn_text="View Case Study"/>
              
              
                <div className='w-96 h-96 max-desktop-s2:w-72 max-desktop-s2:h-72 m-auto  max-tablet-lg1:w-full'>
                    <img src={project.image} alt="" className='w-96 h-96 max-desktop-s2:w-72 max-desktop-s2:h-72  max-tablet-lg1:w-full    rounded-3xl hover:opacity-80'/>
                </div>
                </div>
            </SwiperSlide>
        )
    })
}
    </Swiper>
  )
}
