import Breadcrumbs from "@/components/Breadcrumbs";
import SearchField from "@/components/SearchField";
import Content from "./Content";

export default function ExhibitsPage({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined },
  }) {
  return (
    <div className='sm:w-4/5 container mt-16'>
        <Breadcrumbs data={[{ title: "Экспонаты", slug: "exhibits" }]} />
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-bold lg:text-2xl text-lg'>Экспонаты</h1>
            <SearchField placeholder='Поиск...' className='rounded-full' />
        </div>
        <Content searchParams={searchParams} className="mt-6" />
    </div>
  )
}