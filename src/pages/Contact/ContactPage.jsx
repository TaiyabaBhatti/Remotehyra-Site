import React, { useEffect } from "react";
import Wrapper from "../../components/ui/Wrapper";
import Headline from "../../components/ui/Headline";
import ContactForm from "./ContactForm";
import PageTag from "../Common/PageTag";
import { FcDepartment } from "react-icons/fc";

export default function ContactPage() {
  return (
    <section className="bg-darkbrown pt-28 max-md:pt-10">
      <Wrapper>
        <section className="flex flex-row justify-between gap-20 max-desktop-s5:flex-col">
          {/* Contact section heading col-1*/}

          <section data-aos="fade-up" className="space-y-20">
            <div className="">
              <PageTag text="Contact Us" />
              <h1 className="heading text-white text-4xl font-bold mt-7 mb-5">
                Let's Build Something Amazing
              </h1>
              <p className="desc text-hoverGray text-lg">
                Transform your business with our cutting-edge solutions
              </p>
            </div>

            <div className="flex flex-row gap-5 items-start">
              <FcDepartment className="text-2xl bg-violet-500 size-10 rounded-full p-2 max-mobile-s3:size-8 max-mobile-s3:text-lg" />
              <div className="text-hoverGray">
                <h5 className="sub-title capitalize text-lg text-violet-500 mb-3">
                  united kingdom
                </h5>
                <p>60 Carlisle Road, Bradford</p>
                <p>+44 77 7425 7110</p>
                <p>info@remotehyra.com</p>
              </div>
            </div>
          </section>

          {/* Contact form section col-2*/}
          <section
            data-aos="fade-left"
            className="rounded-2xl p-2 bg-gradient-to-tr from-darkbrown from-60% via-darkbrown via-20% to-violet-500 shadow-lg min-w-[550px] max-sm:min-w-72"
          >
            <div className="bg-darkbrown h-full rounded-2xl p-8 space-y-14 w-full max-mobile-s3:space-y-7">
              <h1 className="text-paratextColor text-2xl max-mobile-s3:text-lg font-semibold ">
                Your Details Here:
              </h1>
              <ContactForm />
            </div>
          </section>
        </section>
      </Wrapper>
    </section>
  );
}
