import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorHandler from '@/components/errors/ErrorHandler';
import ImageComponent from '@/components/ImageComponent'
import Markdown from '@/components/Markdown';
import { getStudentHeadquarters } from '@/lib/queries/universiade/getStudentHeadquarters';
import React from 'react'

export default async function StudentHeadquarters() {

  const [ dataResult ] = await Promise.allSettled([
    getStudentHeadquarters()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Студенческий штаб" 
      notFound
      goBack={false}
    />
  );

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "Студенческий штаб", slug: "student-headquarters" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='mt-8'>
        <Markdown data={dataResult.value.text} moreButton={false}/>
        <h2 className='font-semibold lg:text-lg text-base mt-16 mb-8'>{dataResult.value.headquarters.title}</h2>
        <div className='grid xl:grid-cols-2 grid-cols-1 gap-12'>
          {dataResult.value.headquarters.members.map((headquarter, index) => {
            return (
              <div key={index} className='flex flex-row px-8 py-8 gap-8 bg-gradient-to-r from-gradient-sky to-gradient-pink rounded-2xl'>
                <ImageComponent 
                  src={headquarter.image.data?.attributes.url}
                  alt="Фото"
                  fill={false}
                  width={100}
                  height={100}
                  className='mx-auto aspect-square object-cover rounded-2xl mb-2'
                />
                <div className='flex flex-col gap-2'>
                  <h3 className='text-sm font-semibold text-tertriary'>{headquarter.post}</h3>
                  <h2 className='text-lg font-bold text-primary-foreground'>{headquarter.name}</h2>
                  <h3 className='text-xs text-tertriary'>{headquarter.sfuPost}</h3>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
    </div>
  )
}
