import Image from "next/image";
import MainSlider from "@/components/Home/HomeSlider/MainSlider";
import ClientSlider from "@/components/Home/ClientLogoSlider/ClientSlider";
import ProductCard from "@/components/Home/PrdctCards/ProductCard";

export default function Home() {
  return (
    <>
      <MainSlider />
      <ClientSlider/>
      <ProductCard/>
    </>
  );
}
