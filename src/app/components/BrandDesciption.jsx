import React from "react";
import { Button } from "../our-projects/page";

export default function BrandDesciption() {
  const details = {
    title: "Hospitality delivered with contemporary style.",
    boldText:
      "The Perennia Hotels & Resorts brand is an upper upscale hotel and resort brand, with an emphasis on living spaces that evoke a sense of contemporary African design and a service culture of excellence.",
    ligihtText:
      "Relax your mind, be at your best and make connections that will change your world. Perennia Hotels and Resorts are places where natural beauty meets creativity, artistry meets design, and unforgettable memories are made.",
  };

  return (
    <div>
      <DesciptionCard
        title={details.title}
        boldText={details.boldText}
        ligihtText={details.ligihtText}
      />
    </div>
  );
}

export function DesciptionCard({ title, boldText, ligihtText, buttonText }) {
  return (
    <div className="flex px-6 md:px-[80px] flex-col md:flex-row justify-between my-10 md:mt-[60px] md:mb-[108px]">
      <div className="w-full md:max-w-[48%] flex flex-col justify-between items-start">
        <h2 className="text-2xl md:text-4xl lg:w-[450px] text-[#3D3316] tracking-[-1px] mb-5 md:mb-0 text-left" style={{letterSpacing:'-1px'}}>
          {title}
        </h2>

        <div className={buttonText ? "md:block hidden" : "hidden"}>
          <Button text={buttonText} />
        </div>
      </div>
      <div className="w-full md:max-w-[52%]">
        <p className="font-medium text-lg text-justify md:w-[653px leading-relaxed" style={{letterSpacing:'-1px'}}>{boldText}</p>
        <p className="pt-5 text-sm text-justify leading-relaxed" style={{letterSpacing:'-1px'}}>{ligihtText}</p>
      </div>
      
      <div className={buttonText ? "block md:hidden my-10" : "hidden"}>
          <Button text={buttonText} />
        </div>
    </div>
  );
}
