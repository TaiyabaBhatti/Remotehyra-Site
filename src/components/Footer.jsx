import LogoBox from "./ui/LogoBox";
import PolicyTabs from "./ui/PolicyTabs";
import SocialHandles from "./ui/SocialHandles";
import SupportTabs from "./ui/SupportTabs";


export default function Footer({}) {
  return (
    <footer className="bg-white mt-10  py-9 px-2 rounded-tl-lg rounded-tr-lg w-6xl max-desktop-lg1:w-[80%] max-mobile-s1:w-full m-auto space-y-5">
      
      <div className="flex flex-row justify-between gap-5 flex-wrap max-tablet-lg2:flex-col">
      <LogoBox
        text_size="text-[21px]"
        logo_size="size-10"
        properties="flex-col"
        element="true"
      />

<div className="flex flex-row gap-x-8 gap-y-2 max-tablet-lg2:my-6  h-fit items-center max-tablet-lg2:flex-col max-tablet-lg2:items-start">
    <SupportTabs text="Contact" path="/"  />
    <SupportTabs text="FAQ" path="/" />
    <SupportTabs text="Careers" path="/" />
    <SupportTabs text="Partners" path="/" />
    <SupportTabs text="Integrations" path="/" />
    <SupportTabs text="Security" path="/" />
<SocialHandles />
</div>

      </div>
    
    <div className="flex flex-row justify-between gap-x-10 flex-wrap max-md:flex-col-reverse">
        <p className="text-gray-500 font-semibold text-[13px]">Remotehyra © All Rights Reserved</p>
    
    <div className="flex flex-row gap-x-8 items-start flex-wrap">
        
    <PolicyTabs text="Contact" path="/"/>
    <PolicyTabs text="FAQ" path="/"/>
    <PolicyTabs text="Careers" path="/"/>
    <PolicyTabs text="Partners" path="/"/>
    <PolicyTabs text="Integrations" path="/"/>
    <PolicyTabs text="Security" path="/"/>

</div>
</div>
    </footer>
  );
}
