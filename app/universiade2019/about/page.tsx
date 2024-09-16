import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import NumberTicker from '@/components/magicui/number-ticker';
import { getAboutUniversiade } from '@/lib/queries/universiade/getAboutUniversiade';
import React from 'react'
import Markdown from '@/components/Markdown';

export default async function AboutUniversiade() {

  const [ dataResult ] = await Promise.allSettled([
    getAboutUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Об универсиаде" 
      notFound
      goBack={false}
    />
  );

  return (
    <div className='my-16'>
      <div className='sm:w-4/5 container'>
        <Breadcrumbs data={[
          {title: "Универсиада", slug: "universiade2019"}, 
          {title: "Об универсиаде", slug: "about" }
        ]}/>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
        </div>
        <p className='mt-6 leading-relaxed'>
          {dataResult.value.description}
        </p>
      </div>
      <div className='bg-gradient-to-r from-gradient-sky to-gradient-pink py-8 my-10'>
        <div className='sm:w-4/5 container flex flex-row flex-wrap gap-6 items-start lg:justify-between justify-center'>
          {dataResult.value.figures.map((figure, index) =>
            <div key={index} className='items-center'>
              <NumberTicker value={figure.number} className='text-5xl font-bold text-accent-pink mb-1'></NumberTicker>
              <p className='text-base font-medium text-accent-sky w-36 leading-snug'>{figure.object}</p>
            </div>
          )}
        </div>
      </div>
      <div className='sm:w-4/5 container leading-relaxed'>
        <Markdown data={dataResult.value.universiadeInfo} moreButton={false} className=''/>
      </div>
      <div className='sm:w-4/5 container leading-relaxed mt-20'>
        <Markdown data={dataResult.value.chronology} moreButton={false} className=''/>
      </div>
    </div>
  )
}
