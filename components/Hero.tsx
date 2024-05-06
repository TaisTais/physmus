import Image from "next/image";
import { getMainDescription } from "@/lib/queries/getMainDescription";
import ErrorHandler from "@/components/errors/ErrorHandler";
import { Separator } from "./ui/separator";

export default async function Hero() {
  
  const [ mainDescription ] = await Promise.allSettled([ getMainDescription() ])
  if (mainDescription.status === "rejected") return (
    <ErrorHandler
      error={mainDescription.reason as unknown}
      place="Описание"
      notFound={false}
    />
  )

  return (
    <>
      <div className="lg:mb-32 mb-16 relative sm:min-h-[80vh] min-h-[95vh]">
        <Image 
          src={"/hero-bg.png"}
          alt=""
          fill
          sizes="100vw"
          className="object-cover absolute z-0"
        />
        <div className="sm:w-4/5 container flex h-auto pt-10"> 
          <div className="flex flex-col lg:gap-8 gap-3 lg:max-w-[45%] lg:mt-16 mt-6 z-20 sm:text-left text-center">
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold !leading-snug text-accent-sfu drop-shadow-sm">Виртуальный музей спорта СФУ</h1>
            <Separator className="lg:my-6 my-3 bg-accent-sfu h-[2px] w-3/5 sm:mx-0 mx-auto" />
            <p className="lg:text-base text-sm text-foreground sm:w-2/3">
              {mainDescription.value.description}
            </p>
            <div className="flex flex-row gap-6 my-12 sm:justify-start justify-center">
              {mainDescription.value.icons.data.map((item, index) => (
                <Image 
                  key={index} 
                  src={item.attributes.url} 
                  alt={""} 
                  width={85} 
                  height={85}
                  className="object-cover xl:w-[85px] xl:h-[85px] lg:w-20 lg:h-20 w-16 h-16"
                />
              ))}
            </div>
          </div>
          <Image 
            src={"/sport-students.svg"} 
            alt='students'
            width={1000}
            height={1000}
            className="absolute z-10 2xl:right-40 lg:right-16 right-0 bottom-0 w-fit xl:max-h-[75vh] sm:max-h-[40vh] max-h-[30vh]"
          />
        </div>
      </div>
    </>
  );
}