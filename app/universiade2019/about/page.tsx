import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getAboutUniversiade } from '@/lib/queries/universiade/getAboutUniversiade';
import Image from "next/image";
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

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "Об универсиаде", slug: "about" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <p className='mt-6'>
        {dataResult.value.description}
      </p>
      <Image
        src={dataResult.value.figures.data.attributes.url} 
        alt='universiade main figures'
        width={1000}
        height={1000}
        className="object-contain w-screen my-6"
      />
      <p className='mt-6'>{dataResult.value.universiadeInfo}</p>
    </div>
  )
}
