import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import NumberTicker from '@/components/magicui/number-ticker';
import { getFansUniversiade } from '@/lib/queries/universiade/getFansUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';

export default async function Fans() {
  
  const [ dataResult ] = await Promise.allSettled([
    getFansUniversiade()
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
        {title: "Болельщики", slug: "fans" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='flex flex-row lg:flex-nowrap flex-wrap lg:justify-between justify-center items-center gap-14 my-16 mb-20'>
        <div>
          <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky tracking-normal !leading-none">{dataResult.value.amount.upperLine}</p>
          <NumberTicker value={dataResult.value.amount.number} className="2xl:text-8xl xl:text-7xl sm:text-6xl text-5xl font-extrabold tracking-normal !leading-none text-accent-pink w-auto"></NumberTicker>
          <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky text-right tracking-normal !leading-none">{dataResult.value.amount.lowerLine}</p>
        </div>
        <p className='px-10 py-10 bg-gradient-to-r from-gradient-sky to-gradient-pink w-full rounded-2xl text-base !leading-relaxed'>{dataResult.value.description}</p>
      </div>
      <p className='text-base !leading-relaxed'>{dataResult.value.text}</p>
    </div>
  )
}
