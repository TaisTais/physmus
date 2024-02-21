import Image from "next/image";
import { getMainDescription } from "@/lib/queries/main";
import ErrorHandler from "@/components/errors/ErrorHandler";

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
    <div className="justify-center items-center flex flex-row pt-10">
        <div className=" "> 
          <div className="flex flex-col gap-6 mr-8">
            <h1 className="text title">Виртуальный музей спорта СФУ</h1>
            <div className="text sub-title ">
              {mainDescription.value.description}
            </div>
            <div className="flex flex-row gap-6">
              <Image src={"/logos/logo-sfu.svg"} alt="logo-sfu" width={100} height={100}/>
              <Image src={"/logos/logo-ifksit-old.svg"} alt="logo-ifksit" width={120} height={120}/>
            </div>
          </div>
          
        </div>
        <Image src={"/sport-students.svg"} alt='students' width={700} height={100}/>
    </div>
  );
}