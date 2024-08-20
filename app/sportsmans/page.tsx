import SearchField from '@/components/SearchField'
import React from 'react'
import Content from './Content'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function SportsmansPage({
    searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined },
  }) {
  return (
    <div className='sm:w-4/5 container mt-16'>
        <Breadcrumbs data={[{ title: "Наша гордость", slug: "sportsmans" }]} />
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-bold lg:text-2xl text-lg'>Наша гордость</h1>
            <SearchField placeholder='Поиск по имени' className='rounded-full' />
        </div>
        <Content searchParams={searchParams} className="mt-6" />
    </div>
  )
}
