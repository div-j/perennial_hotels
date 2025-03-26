import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { ArrowCard } from "../our-capabilities/page";

export default function page() {
  return (
    <div className="px-6 md:px-[80px] ">
      <Header title={"Our Projects"} />
      <div className="my-10 md:h-[450px] h-[400px]">
        <Image
          src="/assets/our-project.png"
          alt="our projects"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <section className="flex flex-col md:flex-row gap-5 md:pb-[60px] justify-between">
        <div className="w-full md:w-[45%] flex items-start flex-col justify-between">
          <section>
            <p>OPERATIONAL</p>
            <h1 className="text-2xl text-[#12574A] font-medium">
              Ibom Icon Hotel & Golf Resort (formerly Le Meridien)
            </h1>
            <div className="space-y-5 mt-5">
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Location:</p>
                <p>Uyo, Akwa-Ibom State, Nigeria</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Acreage:</p>
                <p>174 ha</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Deal Type:</p>
                <p>Management</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Deal Size:</p>
                <p>US$ 8 million (Refurbishment)</p>
              </div>
            </div>
          </section>
          <div className="hidden md:block">
            <Button text="Visit Website" />
          </div>
        </div>
        <div className="space-y-5 mt-5 w-full md:w-[50%]">
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">Asset Type:</p>
            <p>Luxury leisure resort & conference center with 18 hole championship golf course</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">Rooms:</p>
            <p>163 keys comprising standard rooms, executive rooms, executive suites, diplomatic suites, presidential suites and two and three bedroom apartment-style chalets</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">F&B:</p>
            <p>2 Restaurants and 2 bars</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">Pools:</p>
            <p>2 (1 adult, 1 children’s pool) – Outdoor</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">Banqueting:</p>
            <p>Large banquet hall (sub-divisible) seating up to 700pax and seven meeting rooms</p>
          </div>
          <hr className="text-gray-500" />
          <div className="flex text-sm ">
            <p className="font-medium min-w-[120px] inline-block">Other Facilities:</p>
            <p>Gym, Squash court, lawn tennis court, table tennis, 3 Kitchens, Laundry, hair & beauty salon, spa, sauna, pool table, games room, football-pitch, volleyball court, night club, water treatment plant and reservoir</p>
          </div>
        </div>
      </section>
      <section className="border-t-1 border-gray-500 mt-5">
        <h1 className="py-10 text-2xl text-center font-semibold text-[#12574A]">
          Project Pipeline
        </h1>
        <div className="flex flex-col md:items-center md:flex-row-reverse md:gap-x-[68px] justify-between">
          <section className="w-full">
            <img
              src="assets/pipeline.png"
              alt="project-pipeline"
              className="w-[612px] h-[743px] object-cover hidden md:block"
            />
            {/* mobile */}
            <img
              src="assets/project-pipeline.png"
              alt="project-pipeline"
              className="w-full h-full object-cover rounded-md md:hidden"
            />
          </section>
          <section className="pt-5 pb-[60px]">
            <div className="flex justify-between">
              <h4 className="text-2xl font-medium">
                Perennia Apapa Hotel, Lagos.
              </h4>
              <p className="p-1 text-[#12574A] border text-center rounded-full rotate-90">
                ←
              </p>
            </div>
            <div className="space-y-5 mt-5">
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Location:</p>
                <p>Uyo, Akwa-Ibom State, Nigeria</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Acreage:</p>
                <p>174 ha</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Deal Type:</p>
                <p>Management</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Deal Size:</p>
                <p>US$ 8 million (Refurbishment)</p>
              </div>
            </div>
            <div className="space-y-5 mt-5 w-full">
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Asset Type:</p>
                <p>Luxury leisure resort & conference center with 18 hole championship golf course</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Rooms:</p>
                <p>163 keys comprising standard rooms, executive rooms, executive suites, diplomatic suites, presidential suites and two and three bedroom apartment-style chalets</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">F&B:</p>
                <p>2 Restaurants and 2 bars</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Pools:</p>
                <p>2 (1 adult, 1 children’s pool) – Outdoor</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm ">
                <p className="font-medium min-w-[120px] inline-block">Banqueting:</p>
                <p>Large banquet hall (sub-divisible) seating up to 700pax and seven meeting rooms</p>
              </div>
              <hr className="text-gray-500" />
              <div className="flex text-sm  pb-5">
                <p className="font-medium min-w-[120px] inline-block">Other Facilities:</p>
                <p>Gym, Squash court, lawn tennis court, table tennis, 3 Kitchens, Laundry, hair & beauty salon, spa, sauna, pool table, games room, football-pitch, volleyball court, night club, water treatment plant and reservoir</p>
              </div>
            </div>
            <div>
              <ArrowCard
                text={
                  "Perennia Axari Hotel, Shopping Mall & Entertainment Center, Calabar."
                }
              />
              <ArrowCard
                text={"Perennia Zephyr Luxury Apartments Oniru, Lagos."}
              />
              <ArrowCard
                text={"Perennia Lansdown Ibru Heights Resort, Aburi, Ghana"}
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export function Button({ text }) {
  return (
    <button className="border p-2 px-4 text-center text-sm rounded-full text-[#12574A]">
      {text} <span className="ml-4">→</span>
    </button>
  );
}