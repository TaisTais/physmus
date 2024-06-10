import Image from "next/image";
import { Separator } from "../../components/ui/separator";

export default function Hero({
  description,
  icons
}: {
  description: string;
  icons: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}) {

  return (
    <>
      <div className="lg:mb-32 mb-16 relative lg:min-h-[90vh] sm:min-h-[80vh] min-h-[95vh] flex items-center justify-center bg-primary">
        <div className="sm:w-4/5 container flex lg:flex-row flex-col h-auto pt-10"> 
          <div className="flex flex-col lg:gap-8 gap-3 lg:max-w-[45%] lg:mt-16 mt-6 z-20 lg:text-left text-center">
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold !leading-snug text-accent-sfu drop-shadow-sm">Виртуальный музей спорта СФУ</h1>
            <Separator className="lg:my-6 my-3 bg-accent-sfu h-[2px] w-3/5 lg:mx-0 mx-auto" />
            <p className="lg:text-base text-sm text-foreground lg:w-2/3">
              {description}
            </p>
            <div className="flex flex-row gap-6 my-12 lg:justify-start justify-center">
              {icons.data.map((item, index) => (
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
            src={"/hero.png"} 
            alt='students'
            width={1000}
            height={1000}
            className="object-contain w-full lg:pr-0 sm:pr-12 pr-6"
          />
        </div>
      </div>
    </>
  );
}