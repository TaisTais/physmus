import SearchField from '@/components/SearchField'
import React from 'react'
import Content from './Content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getWinnersUniversiade } from '@/lib/queries/universiade/getWinnersUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';
import NumberTicker from '@/components/magicui/number-ticker';
import Markdown from '@/components/Markdown';

export default async function Winners({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined },
}) {

  const [ dataResult ] = await Promise.allSettled([
    getWinnersUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Победители, призеры и участники СФУ" 
      notFound
      goBack={false}
    />
  ); 

  return (
    <div className='mt-16'>
      <div className='sm:w-4/5 container'>
        <Breadcrumbs data={[
          {title: "Универсиада", slug: "universiade2019"}, 
          {title: "Победители, призеры и участники СФУ", slug: "winners" }
        ]}/>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
          <SearchField placeholder='Поиск по имени' className='rounded-full' />
        </div>
        <div className='mt-8'>{dataResult.value.description}</div>
      </div>
      <div className='bg-gradient-to-r from-gradient-sky to-gradient-pink py-8 my-10'>
        <div className='sm:w-4/5 container flex flex-row items-start justify-between'>
          {dataResult.value.figures.map((figure, index) =>
            <div key={index} className='items-center'>
              <NumberTicker value={figure.number} className='text-5xl font-bold text-accent-pink mb-1'></NumberTicker>
              <p className='text-base font-medium text-accent-sky w-36 leading-snug'>{figure.object}</p>
            </div>
          )}
        </div>
      </div>
      <div className='sm:w-4/5 container'>
        <Markdown data={dataResult.value.text} moreButton={false}/>
        <Content searchParams={searchParams} className="mt-6"/>
      </div>
    </div>
  )
}
