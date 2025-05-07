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
      <form className="rounded-2xl p-8 bg-white shadow-lg grid grid-cols-2 gap-6 ">
<InputBlock labeltext="First name" inputType="text"/>
<InputBlock labeltext="Last name" inputType="text"/>
<InputBlock labeltext="Email address" inputType="email"/>
<InputBlock labeltext="Phone number" inputType="number"/>
<InputBlock labeltext="Company name" inputType="text"/>
<InputBlock labeltext="Country" inputType="text"/>
      </form>
    </>
  );
}

{
  /*  <div class="p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 shadow-lg">
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">First Name *</label>
            <input required="" class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John" type="text" value=""></div>

            <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name *</label><input required="" class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Doe" type="text" value=""></div><div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label><input required="" class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@company.com" type="email" value=""></div><div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label><input class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" type="tel" value=""></div><div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Company Name</label><input class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Company Inc." type="text" value=""></div><div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Country</label><input class="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="United States" type="text" value=""></div></div><div class="space-y-6"><div class="space-y-2"><label class="text-sm font-medium text-gray-700 dark:text-gray-300">Project Details *</label><textarea required="" rows="5" class="w-full p-4 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Please describe your project requirements..."></textarea></div></div><button type="submit" class="w-full mt-8 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group" tabindex="0"><span class="relative z-10">Send Message</span><div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></button></div>  */
}
