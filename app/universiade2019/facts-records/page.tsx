import Breadcrumbs from '@/components/Breadcrumbs';
import { getFactsRecordsUniversiade } from '@/lib/queries/universiade/getFactsRecordsUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';
import React from 'react'
import ImageComponent from '@/components/ImageComponent';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default async function FactsRecords() {
    
  const [ dataResult ] = await Promise.allSettled([
    getFactsRecordsUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Факты и рекорды" 
      notFound
      goBack={false}
    />
  );
  
  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
          {title: "Универсиада", slug: "universiade2019"}, 
          {title: "Факты и рекорды", slug: "facts-records" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='columns-2 gap-8'>
        {dataResult.value.records.map((record, index) => {
          return(
            <Popover key={index}>
              <PopoverTrigger>
                <div className='flex flex-row px-10 py-8 gap-9 bg-gradient-to-r from-gradient-sky to-gradient-pink rounded-2xl mt-8 items-center'>
                <ImageComponent 
                    src={record.image.data?.attributes.url}
                    alt="Фото"
                    fill={false}
                    width={100}
                    height={100}
                    className='mx-auto h-24 w-auto object-cover rounded-2xl mb-2'
                />
                <p className='text-xl font-semibold text-left text-tertriary'>{record.title}</p>
                </div>
              </PopoverTrigger>
              <PopoverContent>{record.text}</PopoverContent>
            </Popover>
          )
        })}
      </div>
    </div>
  )
}