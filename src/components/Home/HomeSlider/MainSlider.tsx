'use client'
import tms from "@/assets/spotlight/tms-2.webp"
import bms from "@/assets/spotlight/busbar_monitoring.webp"
import ems from "@/assets/spotlight/ems.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from "next/link"



export default function MainSlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        speed= {1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
      >
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${tms.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4 pl-10 pr-40">
              <p className="text-white font-poppins font-semibold text-[22px]/[1.4em]">TRANSFORMER MONITORING SYSTEM</p>
              <h2 className="text-white font-poppins text-[40px]/[1.4em] font-semibold">Empowering Predictive Maintenance Of Your Transformer With Online Monitoring</h2>
              <p className="text-white font-poppins font-regular text-[22px]/[1.4em]">Reliability, Safety, Efficiency & Performance</p>
              <div className="flex flex-row gap-4 pt-10">
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px] bg-transparent"><Link href="" className="">Download brochure</Link></button>
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px] bg-transparent">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${bms.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4 pl-10 pr-50">
              <p className="text-white font-poppins font-semibold text-[22px]/[1.4em]"> BUSBAR MONITORING SYSTEM</p>
              <h2 className="text-white font-poppins text-[40px]/[1.4em] font-semibold">Maximize Busbar Reliability Through Remote Condition Monitoring</h2>
              <p className="text-white font-poppins font-regular text-[22px]/[1.4em]">Detect Thermal And Mechanical Abnormalities</p>
              <div className="flex flex-row gap-4 pt-10">
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px] bg-transparent">Download brochure</button>
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px] bg-transparent">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${ems.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4 pl-10 pr-40">
              <p className="text-white font-poppins font-semibold text-[22px]/[1.4em]"> ENERGY MONITORING SYSTEM </p>
              <h2 className="text-white font-poppins text-[40px]/[1.4em] font-semibold">Optimize Plant Reliability And Maximize Efficiency Through Real-Time Energy Monitoring.</h2>
              <p className="text-white font-poppins font-regular text-[22px]/[1.4em]">Increase Visibility, Improve Reliability & Maximize Plant Performance</p>
              <div className="flex flex-row gap-4 pt-10">
                <button className="text-white font-inter font-regular text-[16px]/[1.4em] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px]  bg-transparent">Download brochure</button>
                <button className="text-white font-inter font-regular text-[16px]/[1.4em] px-6 py-3 rounded border border-white hover:bg-white hover:text-black backdrop-blur-[10px] bg-transparent">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}
