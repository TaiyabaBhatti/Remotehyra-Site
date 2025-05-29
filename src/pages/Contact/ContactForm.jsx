import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputBlock from "./InputBlock";
import SubmitButton from "./SubmitButton";
import MessageInput from "./MessageInput";
import emailjs from "@emailjs/browser";
import { NotificationPopup } from "../../Notification/NotificationPopup";

export default function ContactForm() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = () => {
    NotificationPopup("Form Submitted, Successfully", "success");
    setIsLoading(true);
    form.current.reset();
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-row justify-between gap-10 max-mobile-s3:flex-col">
          <InputBlock
            labeltext="First name"
            inputType="text"
            name="first-name"
            register={register}
            error={errors}
          />
          <InputBlock
            labeltext="Email address"
            inputType="email"
            name="email"
            register={register}
            error={errors}
            patt={true}
          />
        </div>
        <InputBlock
          labeltext="Phone number"
          inputType="text"
          name="phone-number"
          register={register}
          error={errors}
        />
        <InputBlock
          labeltext="Company name"
          inputType="text"
          name="company-name"
          register={register}
          error={errors}
        />
        <InputBlock
          labeltext="Country"
          inputType="text"
          name="country"
          register={register}
          error={errors}
        />
        <MessageInput name="message" register={register} error={errors} />

        <SubmitButton text="Send Message" loading={isLoading} />
      </form>
    </>
  );
}
