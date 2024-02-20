import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainDescription } from "@/lib/queries/main";
import Image from "next/image";
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
    <main className="">
      <div className="max-w-screen-2xl mx-auto">
        {mainDescription.value.description}
        <div className="grid gap-6">
          {mainDescription.value.icons.data.map((icon, index) => (
            <Image 
              key={index}
              src={icon.attributes.url}
              width={300}
              height={300}
              alt="Icon"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
