import React from "react";
import SectionsBlock from "./SectionsBlock";
import { getUniMainPage } from "@/lib/queries/universiade/getUniMainPage";
import ErrorHandler from "@/components/errors/ErrorHandler";
import ImageComponent from '@/components/ImageComponent'

// import { Separator } from "@/components/ui/separator";
// import SectionsBlock from "./SectionsBlock";

export default async function Universiade2019() {

  const [ dataResult ] = await Promise.allSettled([
    getUniMainPage()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Главная страница Универсиады" 
      notFound
      goBack={false}
    />
  );


  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col">
        <div className="sm:w-4/5 container flex lg:flex-row flex-col h-auto relative items-center justify-between"> 
          <div className="flex flex-col lg:gap-1 gap-1 w-fit lg:max-w-[40%] z-20 lg:text-left text-center my-10">
            <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky">{dataResult.value.title.upperLine}</p>
            <h1 className="2xl:text-6xl xl:text-4xl sm:text-3xl text-2xl font-extrabold !leading-tight text-accent-pink w-auto">{dataResult.value.title.mainLine}</h1>
            <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky lg:mt-1">{dataResult.value.title.lowerLine}</p>
            <p className="lg:text-base text-sm text-foreground mt-7 !leading-relaxed mb-4">{dataResult.value.description}</p>
          </div>
          <ImageComponent 
            src={dataResult.value.image.data?.attributes.url} 
            alt='students'
            fill={false}
            width={1000}
            height={1000}
            className="object-contain lg:w-3/5 w-full right-0 mb-10 lg:my-16 xl:my-20"
          />
        </div>
        <ImageComponent 
          src={dataResult.value.baner.data?.attributes.url}
          alt="baner"
          fill={false}
          width={1728}
          height={62}
          className="object-contain w-full z-[2]"
        />
      </div>
      <div className="lg:my-28 my-14 w-4/5 mx-auto">
        <SectionsBlock />
      </div>
    </div>
    
  )
}