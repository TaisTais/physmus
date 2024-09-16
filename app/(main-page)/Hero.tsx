import type { MainPageT } from "@/lib/types/main-page";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

export default function Hero({
  data
}: {
  data: MainPageT
}) {

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="sm:w-4/5 container flex gap-4 lg:flex-row flex-col h-auto py-10 relative"> 
          <div className={cn(
            "flex flex-col lg:gap-8 gap-3 mt-8 z-20 lg:text-left text-center",
            data.mainImages.data.length === 1 && "lg:max-w-[35%]"
          )}>
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-extrabold !leading-normal text-accent-orange">{data.title}</h1>
            {data.description && (
              <p className="lg:text-base text-sm text-foreground lg:w-2/3">
                {data.description}
              </p>
            )}
            <div className="flex flex-row gap-6 my-12 lg:justify-start justify-center">
              {data.icons.data.map((item, index) => (
                <Image 
                  key={index} 
                  src={item.attributes.url} 
                  alt={""} 
                  width={95} 
                  height={95}
                  className="object-contain xl:w-[90px] xl:h-[90px] lg:w-20 lg:h-20 w-16 h-16"
                />
              ))}
            </div>
          </div>
          {data.mainImages.data.length > 1
            ? (
              <HeroCarousel data={data.mainImages.data} />
            )
            : data.mainImages.data[0] && (
              <Image 
                src={data.mainImages.data[0].attributes.url} 
                alt=''
                width={1000}
                height={1000}
                className="object-contain lg:w-2/3 w-full py-0 my-0"
              />   
            )
          }
        </div>
      </div>
    </>
  );
}