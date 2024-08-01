import React from "react";
import Image from "next/image";
import SectionsBlock from "./SectionsBlock";
// import { Separator } from "@/components/ui/separator";
// import SectionsBlock from "./SectionsBlock";

export default function Universiade2019() {

  return (
    <div className="flex flex-col">
      <div className=" relative lg:min-h-[80vh] sm:min-h-[80vh] min-h-[80vh] flex items-start justify-start">
        <div className="sm:w-4/5 container flex lg:flex-row flex-col h-auto py-20 relative"> 
          <div className="flex flex-col lg:gap-1 gap-1 w-fit lg:max-w-[30%] z-20 lg:text-left text-center">
            <p className="2xl:text-2xl xl:text-1xl sm:text-1xl text-1xl font-bold text-accent-sky">XXIX</p>
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold !leading-tight text-accent-pink w-auto">Всемирная Зимняя Универсиада</h1>
            <p className="2xl:text-2xl xl:text-1xl sm:text-1xl text-1xl font-bold text-accent-sky lg:mt-1">в Красноярске</p>
            <p className="lg:text-base text-sm text-foreground mt-7 !leading-relaxed ">
              Универсиада 2019 года проходила в Красноярске со 2 по 12 марта с участием 1692 спортсменов из 58 стран, которые разыграли 76 комплектов наград в 11 видах спорта.
            </p>
          </div>
          <Image 
            src={"/universiade-bg.png"} 
            alt='students'
            width={1000}
            height={1000}
            className="object-contain lg:absolute lg:w-3/5 w-full right-0"
          />
        </div>
      </div>
      <Image 
        src={"/universiade-baner.png"}
        alt=""
        width={1728}
        height={62}
        className="object-contain w-full z-[2]"
      />
      <div className="lg:my-28 my-14 w-4/5 mx-auto">
          <SectionsBlock />
      </div>
    </div>
    
  )
}

/* <div className="flex flex-col">
      <div className="relative sm:min-h-[80vh] min-h-[95vh] flex items-center">
        <div className="w-full h-full absolute pink-gradient z-[1]"/>
        <Image 
          src={"/universiade-bg.png"}
          alt=""
          fill
          sizes="100vw"
          className="object-cover absolute blur-sm z-0"
        />
        <div className="sm:w-4/5 container flex h-auto sm:mb-0 mb-[40%]"> 
          <div className="flex flex-col lg:gap-6 gap-3 lg:max-w-[50%] z-20 sm:text-left text-center justify-center h-full">
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold !leading-snug text-white drop-shadow-sm">XXIX Всемирная зимняя Универсиада в Красноярске</h1>
            <Separator className="lg:my-6 my-3 bg-white h-[2px] w-2/5 sm:mx-0 mx-auto" />
            <p className="lg:text-base text-sm text-foreground sm:w-3/4 !leading-relaxed">
                XXIX Всемирная зимняя универсиада, проходила в Красноярске со 2 по 12 марта 2019 года с участием 1692 спортсменов из 58 стран, которые разыграли 76 комплектов наград в 11 видах спорта.
            </p>
          </div>
        </div>
      </div>
      <Image 
        src={"/universiade-baner.png"}
        alt=""
        width={1728}
        height={62}
        className="object-contain w-full z-[2]"
      />

      <div className="sm:w-4/5 container lg:mt-32 mt-16">
        <Image
          src={"/welcome-to-winter.png"}
          alt="WELCOME TO WINTER!"
          width={280}
          height={21}
          quality={100}
          className="object-contain mb-10"
        />

        <p className="lg:text-base text-sm !leading-loose">
          Решение о проведении универсиады в Красноярске было принято на заседании Исполкома Международной федерацией университетского спорта (FISU) 9 ноября 2013 года в Брюсселе. Красноярская универсиада стала первой
          зимней в истории российского спорта и третьей, прошедшей в России.
        </p>

        <div className="lg:my-28 my-14">
          <SectionsBlock />
        </div>
      </div>
    </div> */