import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SocialHandles() {
  return (
    // social links
    <div
      className={`flex flex-row  gap-x-3  text-2xl max-md:text-lg text-black`}
    >
      <a className="" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a className="" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a className="" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/company/remotehyra/"
        className=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
}
