import Link from "next/link";
import Card1 from "../../../assets/cardImages/TMSiq.webp";
import { ArrowRight } from "lucide-react";
import "./prodCard.css";

export default function ProductCard() {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-20">
      <p className="font-poppins font-semibold text-[24px]/[36px] text-[#0D6CB3] uppercase pb-2.5">
        Our offerings
      </p>
      <h2 className="font-poppins font-bold text-[40px]/[46px] text-black">
        Optimizing Performance With Our Cutting-Edge Solutions
      </h2>
      <div className="flex flex-col py-10">
        <div className="absolute h-150 w-100"></div>
        <div
          className="mainCard relative h-125 w-100 bg-no-repeat bg-cover flex flex-col justify-end items-start z-8"
          style={{ backgroundImage: `url(${Card1.src})` }}
        >
          {/* <img src={Card1.src} alt=""/> */}
          <div className="infoDesc w-full h-fit bg-[#0005] backdrop-blur-[2px] px-3 py-5 translate-y-37 transition-all ease-in-out duration-300">
            <h5 className="font-poppins font-bold text-[22px]/[32px] text-white">
              Transformer Monitoring System
            </h5>
          </div>
          <div className="serviceLink opacity-0 w-full h-fit bg-[#0005] backdrop-blur-[2px] px-3 py-5 translate-y-0 transition-all ease-in-out duration-300">
            <p className="font-poppins font-medium text-[18px]/[32px] text-white">
              Empowering predictive maintenance of your transformer with online
              monitoring.
            </p>
            <Link className="font-poppins font-light text[16px]/[32px] text-white" href={"/"}>
              Readmore<ArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
