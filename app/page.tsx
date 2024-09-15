// import TextBlock from "@/components/content/TextBlock";
import Markdown from "@/components/Markdown";
import Hero from "./(main-page)/Hero";
import MainCategories from "./(main-page)/MainCategories";
import ErrorHandler from "@/components/errors/ErrorHandler";
import { getMainPage } from "@/lib/queries/getMainPage";

export default async function Home() {

  const [ dataResult ] = await Promise.allSettled([ getMainPage() ])
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Главная страница"
      notFound
      goBack={false}
    />
  )

  return (
    <div className="flex flex-col gap-6 mt-6">
      <Hero data={dataResult.value} />
      {!!dataResult.value.text && (
        <div className="sm:w-4/5 container lg:mb-24 mb-12 lg:mt-8">
          <div className="w-full lg:p-16 p-8 bg-primary rounded-3xl">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <Markdown data={dataResult.value.text} className="" />
          </div>
        </div>
      )}
      <MainCategories categories={dataResult.value.categories} />
    </div>
  );
}