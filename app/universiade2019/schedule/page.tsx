import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import { getCompetitionSchedule } from '@/lib/queries/universiade/getCompetitionSchedule';
import ErrorHandler from '@/components/errors/ErrorHandler';
import Image from "next/image";


export default async function Schedule() {

  const [ dataResult ] = await Promise.allSettled([
    getCompetitionSchedule()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Расписание соревнований" 
      notFound
      goBack={false}
    />
  );

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "Расписание соревнований", slug: "schedule" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='mt-10'>
        {dataResult.value.competitions.map((comp, index) => 
        <div key={index} className='mb-6 py-8 px-12 bg-gradient-to-r from-gradient-sky to-gradient-pink w-full rounded-2xl'>
          <h2 className='text-xl font-semibold text-primary-foreground mb-4'>{comp.title}</h2>
          <div className='flex flex-row gap-16'>
            <div className='flex flex-row gap-2 items-center'>
              <Image
                src='/icons/calendar.png' 
                alt='universiade main figures'
                width={25}
                height={25}
                className="w-5 h-5"
              />
              <p>{comp.date}</p>
            </div>
            <div className='flex flex-row gap-1.5'>
              <Image
                src='/icons/marker.png' 
                alt='universiade main figures'
                width={25}
                height={25}
                className="w-5 h-5 items-center"
              />
              <p>{comp.address}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
