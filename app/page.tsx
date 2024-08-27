// import TextBlock from "@/components/content/TextBlock";
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
    <div className="flex flex-col gap-6 lg:mb-32 mb-24">
      <Hero description={dataResult.value.description} icons={dataResult.value.icons} />
      <MainCategories categories={dataResult.value.categories} />
      {/* <TextBlock data={dataResult.value.about} className="sm:w-4/5 container" /> */}
    </div>
  );
}