import Image from "next/image";
import { getMainDescription } from "@/lib/queries/main";
import ErrorHandler from "@/components/errors/ErrorHandler";
import { HeroCards } from "@/components/ui/hero-cards";

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
    <div className="bg-hero mb-32 bg-no-repeat bg-cover bg-center">
      <div className="container justify-center items-center flex flex-row h-auto pt-10"> 
        <div className="flex flex-col gap-8 mr-8 ">
          <h1 className="text title text-primary-foreground">Виртуальный музей спорта СФУ</h1>
          <div className="text sub-title text-primary-foreground">
            {mainDescription.value.description}
          </div>
          <div className="flex flex-row gap-6">
            {mainDescription.value.icons.data.map((item, index) => (
              <Image key={index} src={item.attributes.url} alt={""} width={100} height={100} />
            ))}
          </div>
        </div>
        < Image src={"/sport-students.svg"} alt='students' width={750} height={100} />
      </div>
      </div>
      <div className="container h-auto">
        <HeroCards/>
        
      </div>



    </>
  );
}