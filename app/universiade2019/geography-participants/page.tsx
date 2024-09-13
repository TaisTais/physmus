import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorHandler from '@/components/errors/ErrorHandler';
import Markdown from '@/components/Markdown';
import { getGeographyOfParticipants } from '@/lib/queries/universiade/getGeographyOfParticipants';
import React from 'react'

export default async function GeographyParticipants() {
  
  const [ dataResult ] = await Promise.allSettled([
    getGeographyOfParticipants()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="География участников" 
      notFound
      goBack={false}
    />
  );
    
  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "География участников", slug: "geography-participants" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='flex flex-col mt-8 gap-4'>
        <Markdown data={dataResult.value.info.text}/>
        <div className='px-8 py-8 gap-20 bg-gradient-to-r from-gradient-sky to-gradient-pink w-full sm:columns-2 md:columns-3 lg:columns-4 2xl:columns-6 rounded-2xl'>
          {dataResult.value.info.countries.map((counry, index) => 
            <div key={index} className='w-44'>
              <p>{counry.name}</p>
            </div>
          )}
        </div>
        <p className='text-base mt-6 !leading-relaxed'>{dataResult.value.info.additionalText}</p>
      </div>
    </div>
  )
}
