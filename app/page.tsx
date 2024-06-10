import Hero from "@/components/Hero";
import MainCategories from "@/components/MainCategories";
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
    <div className="flex flex-col gap-6">
      <Hero description={dataResult.value.description} icons={dataResult.value.icons} />
      <MainCategories categories={dataResult.value.categories} />
    </div>
  );
}