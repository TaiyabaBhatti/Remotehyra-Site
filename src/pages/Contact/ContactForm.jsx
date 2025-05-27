import React from "react";
import { useForm } from "react-hook-form";
import InputBlock from "./InputBlock";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className="flex flex-col gap-6 w-full">
        <div className="flex flex-row justify-between gap-10 max-mobile-s3:flex-col">
          <InputBlock labeltext="First name" inputType="text" />
          <InputBlock labeltext="Email address" inputType="email" />
        </div>

        <InputBlock labeltext="Phone number" inputType="text" />
        <InputBlock labeltext="Company name" inputType="text" />
        <InputBlock labeltext="Country" inputType="text" />
      </form>
    </>
  );
}
