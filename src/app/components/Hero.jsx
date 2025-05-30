"use client";

import Image from "next/image";
import Header from "./Header";
import { assets } from "../../../public/assets";

const Hero = () => {
  return (
    <section className="flex flex-col items-center space-y-10 ">
      <h2 className=" text-2xl my-[60px]  md:text-[46px]  font-medium px-6 md:px-0  text-center text-black w-full md:max-w-[763px] tracking-[-1px] " >
      True <span className="text-black">African </span>
      <span className="text-[#12574A]">Hospitality</span>, Delivered with Global
      <span className="text-[#12574A]"> Excellence</span>
    </h2>

      <div className="w-full h-[729px] ">
        <img src='https://res.cloudinary.com/dkvi8w46c/image/upload/v1742816118/Hero_Banner_utnlb4.png' alt="Hero Image" 
        objectFit="cover" 
         width={100}
        height={100}
        className="h-[729px] w-full hidden md:block" />
        {/* mobile */}
         <img src='https://res.cloudinary.com/dkvi8w46c/image/upload/v1742815268/Mob_Hero_Banner_zhthyd.png' alt="Hero Image" 
        objectFit="cover" 
         width={100}
        height={100}
        className="h-full w-full md:hidden" />
      </div>
      
    </section>
  );
};

export default Hero;
