import Button from "../../components/ui/Button";
import Wrapper from "../../components/ui/Wrapper";
Button


export default function HomePage() {
  return (
    <>


{/* Hero section */}
<div className="h-[660px] max-desktop-s1:h-full overflow-hidden">
<div className="flex flex-row gap-x-36 justify-between max-desktop-s1:flex-col">
<div className="text-black pl-24 px-6  flex flex-col items-start  gap-y-6 justify-center  w-[50%] max-desktop-s1:w-[80%] ">
          <h1 className="text-6xl font-extrabold ">
            Empowering Businesses with AI Solutions
          </h1>
          <p className="text-2xl ">
          Transform your business with our innovative AI-driven solutions.
          </p>
          <Button
              text="Explore now"
              properties="
            bg-purple-600
            text-white
            text-2xl
            relative
            z-50
            rounded-3xl
            py-4 px-8
            "
            />
        </div>
        
        <div className="relative">
            <div className="absolute -z-50 max-desktop-s1:left-10  -left-96 top-0 ">
            <svg className="w-250 h-170" viewBox="0 0 951 459" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45 552L45.0001 455.999C45.0001 422.862 71.863 395.999 105 395.999L150.764 395.999L215.032 395.999C248.325 395.999 275.252 368.892 275.031 335.6L274.681 282.97L274.681 150.701L274.681 105C274.681 71.8629 301.544 45 334.681 45L590.34 45L906 45" stroke="url(#paint0_linear_903:2012)" strokeWidth="90" strokeLinecap="round"></path>
                        <defs>
                        <linearGradient id="paint0_linear_903:2012" x1="461.739" y1="53.9753" x2="462.552" y2="548.371" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#6BDAB6"></stop>
                        <stop offset="1" stopColor="#66E0F6"></stop>
                        </linearGradient>
                        </defs>
                    </svg>
            </div>
      <div className="h-[589px] w-lg max-desktop-s1:ml-[50%]">
         <img src="https://forethought.ai/wp-content/uploads/2021/10/homepage-hero.png" alt="" className=" object-cover rounded-bl-2xl"/></div>
           
        </div>
</div>
</div>








<section className="bg-black">
    <div className="pl-24 flex flex-col items-start gap-y-6 justify-center  w-full  flex-1  py-8 pr-8">
          <h1 className="text-6xl font-extrabold text-[#F0F0F0] ">
            Empowering Businesses with AI Solutions
          </h1>
          <p className="text-2xl text-white">
          Transform your business with our innovative AI-driven solutions.
          </p>
          <Button
              text="Explore now"
              properties="
            bg-purple-600
            text-white
            text-2xl
            relative
            z-50
            rounded-3xl
            py-4 px-8
            "
            />
        </div></section>


      
      
      
</>
      
   
  );
}
