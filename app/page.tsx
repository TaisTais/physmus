import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainDescription } from "@/lib/queries/main";
import Image from "next/image";
import Hero from "./hero/page";

export default async function Home() {

  const [ mainDescription ] = await Promise.allSettled([ getMainDescription() ])
  if (mainDescription.status === "rejected") return (
    <ErrorHandler
      error={mainDescription.reason as unknown}
      place="Last Content"
      notFound
      goBack={false}
    />
  )

  return (
    <div>
      <Hero/> {mainDescription.value.description}
    </div>
  );
}
