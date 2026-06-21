'use client'
import sliderImage from "@/assets/spotlight/tms-2.webp"
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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
      >
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${sliderImage.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4">
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <h2 className="text-white font-poppins text-[40px]/[1.2] font-medium">This is first slide</h2>
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <div className="flex flex-row gap-2">
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black"><Link href="" classname="">Download brochure</Link></button>
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${sliderImage.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4">
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <h2 className="text-white font-poppins text-[40px]/[1.2] font-medium">This is first slide</h2>
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <div className="flex flex-row gap-2">
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black">Download brochure</button>
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className='flex flex-col bg-cover bg-no-repeat bg-center w-full h-[90vh]' style={{ backgroundImage: `url(${sliderImage.src})` }}>
            <div className="max-w-360 w-full text-left m-auto flex flex-col gap-4">
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <h2 className="text-white font-poppins text-[40px]/[1.2] font-medium">This is first slide</h2>
              <p className="text-white font-inter font-regular text-[24px]/[1.2]">This is the description for the first slide.</p>
              <div className="flex flex-row gap-2">
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black">Download brochure</button>
                <button className="text-white font-inter font-regular text-[16px]/[1.2] px-6 py-3 rounded border border-white hover:bg-white hover:text-black">Learn More</button>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}
