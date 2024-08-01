import Image from "next/image";

export default function Hero({
  description,
  icons
}: {
  description: string | null;
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
      <div className="lg:mb-32 mb-16 relative lg:min-h-[90vh] sm:min-h-[70vh] min-h-[90vh] flex items-center justify-center">
        <div className="sm:w-4/5 container flex lg:flex-row flex-col h-auto py-10 relative"> 
          <div className="flex flex-col lg:gap-8 gap-3 lg:max-w-[60%] mt-16 z-20 lg:text-left text-center">
            <h1 className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold !leading-tight text-accent-orange">Виртуальный музей спорта СФУ</h1>
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
                  className="object-contain xl:w-[80px] xl:h-[80px] lg:w-20 lg:h-20 w-16 h-16"
                />
              ))}
            </div>
          </div>
          <Image 
            src={"/hero.png"} 
            alt='students'
            width={1000}
            height={1000}
            className="object-contain lg:absolute lg:w-2/3 w-full right-0 py-0 my-0"
          />
        </div>
      </div>
    </>
  );
}