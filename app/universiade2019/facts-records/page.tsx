import Breadcrumbs from '@/components/Breadcrumbs';
import { getFactsRecordsUniversiade } from '@/lib/queries/universiade/getFactsRecordsUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';
import React from 'react'
import ImageComponent from '@/components/ImageComponent';

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

      <h2>Рекорды</h2>
      <div className='columns-3'>
        {dataResult.value.records.map((record, index) => {
          return(
            <div key={index} className='flex flex-row px-8 py-8 gap-8 bg-gradient-to-r from-gradient-sky to-gradient-pink rounded-2xl'>
              <ImageComponent 
                  src={record.image.data?.attributes.url}
                  alt="Фото"
                  fill={false}
                  width={100}
                  height={100}
                  className='mx-auto aspect-square object-cover rounded-2xl mb-2'
              />
              <p>{record.title}</p>
            </div>
          )
        }
        )}
      </div>

      <h2>Факты</h2>
      <div>
        {dataResult.value.facts.map((fact, index) => {
          return(
            <div key={index} className='flex flex-row px-8 py-8 gap-8 bg-gradient-to-r from-gradient-sky to-gradient-pink rounded-2xl'>
              <ImageComponent 
                  src={fact.image.data?.attributes.url}
                  alt="Фото"
                  fill={false}
                  width={100}
                  height={100}
                  className='mx-auto aspect-square object-cover rounded-2xl mb-2'
              />
              <p>{fact.title}</p>
            </div>
          )
        }
        )}
      </div>  
    </div>
  )
}
