import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainDescription } from "@/lib/queries/main";
import Hero from "./hero/page";

export default async function Home() {

  const [ mainDescription ] = await Promise.allSettled([ getMainDescription() ])
  if (mainDescription.status === "rejected") return (
    <ErrorHandler
      error={mainDescription.reason as unknown}
      place="Описание"
      notFound={false}
    />
  )

  return (
    <main className=" ">
      <div className="">
        <div className="">
          <Hero/>
        </div>
      </div>
    </main>
  );
}


        // {mainDescription.value.description}
        // <div className="grid gap-6">
        //   {mainDescription.value.icons.data.map((icon, index) => (
        //     <Image 
        //       key={index}
        //       src={icon.attributes.url}
        //       width={300}
        //       height={300}
        //       alt="Icon"
        //     />
        //   ))}
        // </div>