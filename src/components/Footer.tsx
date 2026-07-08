import React from "react";
import logo from "../assets/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Yesteryear } from "next/font/google";

export default function Footer() {
  return (
    <>
      <div className="bg-[#ECF8FF]">
        <div className="max-w-360 w-full px-10 py-10 gap-10 flex flex-row m-auto justify-between">
          <div className="w-30% flex flex-wrap flex-col items-start gap-2">
            <img src={logo.src} />
            <p className="font-inter text-[16px]/[28px] font-regular text-[#1f1f1f]">
              Millennium Business Park, Unit No. 302/303/304,
              <br />
              Building No.4, Sector No.3 TTC MIDC,
              <br />
              Mahape Navi Mumbai 400710 India
            </p>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-0">
                <h4 className="font-poppins font-semibold text-[14px]/[28px] text-black">
                  Phone:
                </h4>
                <a
                  className="font-poppins font-regular text-[14px]/[28px] text-black hover:text-[#0D6CB3]"
                  href="tel:+91 77579 43451"
                >
                  +91 77579 43451
                </a>
              </div>
              <div className="flex flex-col gap-0">
                <h4 className="font-poppins font-semibold text-[14px]/[28px] text-black">
                  Email:
                </h4>
                <a
                  className="font-poppins font-regular text-[14px]/[28px] text-black hover:text-[#0D6CB3]"
                  href="mailto:digital@motwane.com"
                >
                  digital@motwane.com
                </a>
              </div>
            </div>
          </div>
          <div className="w-30% flex flex-col gap-5 flex-wrap ">
            <div className="flex flex-col gap-3">
              <h4 className="font-inter text-[16px]/[28px] font-semibold text-[#0D6CB3]">
                Subscribe to our Newsletter
              </h4>
              <form
                action="sumbit"
                className="flex flex-row align-middle items-center"
              >
                <input
                  className="font-poppins font-regular text-[14px]/[28px] border-b border-[#55AFE2] focus-visible:outline-none"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email id"
                />
                <button
                  type="submit"
                  className="cursor-pointer border px-5 py-0.75 bg-blue-200"
                >
                  <ArrowRight className="w-3.5 " />
                </button>
              </form>
              <p className="font-inter text-[10px]/[16px] font-regular text-[#0D6CB3]">
                By subscribing, you agree to receive e-mail from us and <br />
                acknowledging our Privacy Policy.
              </p>
            </div>
            <div className="icn_box flex flex-row gap-5">
              <FaFacebookF
                href="#"
                className="text-2xl text-[#0D6CB3] cursor-pointer"
              />
              <IoLogoLinkedin
                href="#"
                className="text-2xl text-[#0D6CB3] cursor-pointer"
              />
              <FaYoutube
                href="#"
                className="text-2xl text-[#0D6CB3] cursor-pointer"
              />
            </div>
          </div>
          <div className="w-30% flex flex-wrap">
            <div className="flex flex-row gap-10">
              <ul className="list-none font-poppins font-regular text-[16px]/[32px] text-[#1f1f1f]">
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li className="hover:text-[#55AFE2] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/careers"}>Careers</Link>
                </li>
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/contactus"}>Contact Us</Link>
                </li>
              </ul>
              <ul className="font-poppins font-regular text-[16px]/[32px] text-[#1f1f1f] ">
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/transformerIQ"}>
                    Transformer Monitoring System
                  </Link>
                </li>
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/busbarIQ"}>Busbar Monitoring System</Link>
                </li>
                <li className="hover:text-[#0D6CB3] hover:transition-scale hover:scale-105 duration-500">
                  <Link href={"/emsIQ"}>Energy Monitoring System</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-10 py-2 bg-[#0D6CB3] flex flex-row justify-between items-center">
        <p className="font-poppins font-regular text-[13px]/[20px] text-white">© {new Date().getFullYear()} www.motwanedigital.com - All Rights Reserved.</p>
        <div className="flex flex-row gap-2 justify-center items-center">
          <Link className="font-poppins font-regular text-[13px]/[20px] text-white" href={'/'}>Privacy Policy</Link> | 
          <Link className="font-poppins font-regular text-[13px]/[20px] text-white" href={'/'}>Terms and Conditions</Link>
        </div>
      </div>
    </>
  );
}
