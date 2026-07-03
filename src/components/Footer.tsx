import React from 'react'
import logo from "../assets/logo.svg"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <div className="max-w-360 w-full px-10 py-10 gap-2 flex flex-row">
        <div className="w-30%">
          <img src={logo.src} />
          <p className="font-inter text-[16px]/[32px] font-regular">
            Millennium Business Park, Unit No. 302/303/304, Building No.4, Sector No.3 TTC MIDC, Mahape, Navi Mumbai 400710 India
          </p>
          <div className="">
            <div className="">
              <h4 className="">Phone:</h4>
              <a href="tel:+91 77579 43451">+91 77579 43451</a>
            </div>
            <div className="">
              <h4 className="">Email:</h4>
              <a href="mailto:digital@motwane.com">digital@motwane.com</a>
            </div>
          </div>
        </div>
        <div className="w-30%">
          <div className="">
            <h4 className="">Subscribe to our Newsletter</h4>
            <form action="">
              <input type="email" name="" id="" />
              <button type="submit">submit</button>
            </form>
            <p className="">By subscribing, you agree to receive e-mail from us and acknowledging our Privacy Policy.</p>
          </div>
          <div className="icn_box flex flex-row gap-2">
            <FaFacebookF/>
            <IoLogoLinkedin />
            <FaYoutube/>
          </div>
        </div>
        <div className="w-30%"></div>
      </div>
    </div>
  )
}
