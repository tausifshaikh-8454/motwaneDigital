
import * as React from "react";
import Link from "next/link";
import logo from "../assets/logo.svg"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Head() {
  return (
    <header className=" py-5 px-10 ">
      <div className="flex flex-row max-w-360 w-full items-center justify-between mx-auto">
        <div className="w-30%">
          <img src={logo.src} alt="" />
        </div>
        <div className="w-30%">
          <NavigationMenu>
            <NavigationMenuList className="text-[18px]/[32px] font-poppins font-medium gap-5">
              <NavigationMenuItem>
                <Link className="" href="/">Home</Link>
              </NavigationMenuItem>

              <NavigationMenuItem >  
                <NavigationMenuTrigger className="text-[18px]/[32px] font-poppins font-medium">Products</NavigationMenuTrigger>

                <NavigationMenuContent className="text-[14px]/[28px] font-poppins font-regular w-75">
                  <ul className="w-150 grid gap-2 p-4">
                    <li className="text-[14px]/[28px] font-poppins font-regular">
                      <Link href="/transformerIQ">Transformer Monitoring System</Link>
                    </li>
                    <li className="text-[14px]/[28px] font-poppins font-regular">
                      <Link href="/busbarIQ">Busbar Monitoring System</Link>
                    </li>
                    <li className="text-[14px]/[28px] font-poppins font-regular">
                      <Link href="/emsIQ">Energy Monitoring System</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about-us">About Us</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/careers">Careers</Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[18px]/[32px] font-poppins font-medium">Media</NavigationMenuTrigger>

                <NavigationMenuContent className="text-[14px]/[28px] font-poppins font-regular w-75">
                  <ul className="grid gap-2 p-4 w-150 left-10 right-auto position-absolute">
                    <li className="text-[14px]/[28px] font-poppins font-regular">
                      <Link href="/webinar">Webinars</Link>
                    </li>
                    <li className="text-[14px]/[28px] font-poppins font-regular">
                      <Link href="/blog">Blogs</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contactus">Contact us</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="w-30% font-poppins font-medium text-[18px]/[32px] text-[#1A1A1A]">
          <Link href={"#"}>Get In Touch</Link>
        </div>
      </div>
    </header>
  );
}
