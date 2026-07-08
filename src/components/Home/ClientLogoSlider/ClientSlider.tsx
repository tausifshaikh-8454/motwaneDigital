"use client";

import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/clientLogos/Apollo-tyre-MD.png";
import logo2 from "../../../assets/clientLogos/Bhart-MD.png";
import logo3 from "../../../assets/clientLogos/Cpcl-MD.png";
import logo4 from "../../../assets/clientLogos/Grasim-MD.png";
import logo5 from "../../../assets/clientLogos/Hindalco-MD.png";
import logo6 from "../../../assets/clientLogos/Hindustan-MD.png";
import logo7 from "../../../assets/clientLogos/ITC-MD.png";
import logo8 from "../../../assets/clientLogos/JKtyre-MD.png";
import logo9 from "../../../assets/clientLogos/Jsw-MD.png";
import logo10 from "../../../assets/clientLogos/Laxmi-MD.png";
import logo11 from "../../../assets/clientLogos/Nuvoco-MD.png";
import logo12 from "../../../assets/clientLogos/Sun-MD.png";
import logo13 from "../../../assets/clientLogos/Toshiba-MD.png";
import logo14 from "../../../assets/clientLogos/Yokohama-MD.png";
import logo15 from "../../../assets/clientLogos/ultraTech-MD.png";
import Image, { StaticImageData } from "next/image";

const logos: {
  img: StaticImageData;
}[] = [{ img: logo1 }, { img: logo2 }, { img: logo3 },{ img: logo4 },{ img: logo5 },{ img: logo6 },{ img: logo7 },{ img: logo8 },{ img: logo9 }, { img: logo10 },{ img: logo11 },{ img: logo12 },{ img: logo13 },{ img: logo14 },{ img: logo15 }];

export default function ClientSlider() {
  return (
    <div className="flex flex-row py-5 px-10 justify-center items-center bg-[#ECF8FF]">
      <div className="">
        <p className="font-poppins font-semibold text-[24px]/[32px] text-[#0D6CB3]">Our Valued Customers</p>
      </div>
      <Marquee speed={30} direction='right'>
        {logos.map((logo, index) => (
          <img className="w-40" key={index} src={logo.img.src} alt="" />
        ))}
      </Marquee>
    </div>
  );
}
