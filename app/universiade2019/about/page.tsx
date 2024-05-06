import Markdown from '@/components/Markdown';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getAboutUniversiade } from '@/lib/queries/sports';
import React from 'react'

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

  console.log(dataResult.value.text)

  return (
    <div className='sm:w-4/5 container my-16'>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>Об универсиаде</h1>
      </div>
      <div className='mt-6'>
        <Markdown data={dataResult.value.text} moreButton={false}/>
      </div>
    </div>
  )
}
