import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getWinnersUniversiade } from '@/lib/queries/universiade/getWinnersUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';
import NumberTicker from '@/components/magicui/number-ticker';
import Markdown from '@/components/Markdown';
import Link from 'next/link';
import ImageComponent from '@/components/ImageComponent';

export default async function Winners({
  // searchParams
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
          {/* <SearchField placeholder='Поиск по имени' className='rounded-full' /> */}
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
        <div className='mt-12'>
          <h1 className='font-semibold lg:text-xl text-base mb-2'>Победители</h1>
          <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8'>
            {dataResult.value.winners.data.map(sportsman => {
              const firstImage = sportsman.attributes.images.data.length > 0 ? sportsman.attributes.images.data[0].attributes.url : undefined
              return (
                <Link 
                  key={sportsman.id}
                  href={`/sportsmans/${sportsman.id}`} 
                  className='lg:text-base text-sm text-center rounded-3xl bg-primary shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
                >
                  <ImageComponent 
                    src={firstImage}
                    alt="Фото"
                    fill={false}
                    width={600}
                    height={600}
                    className='w-full md:aspect-[5/6] aspect-square mx-auto object-cover rounded-t-3xl'
                  />
                  <div className='p-3'>
                    <h2 className='font-medium mb-0.5'>{sportsman.attributes.fio}</h2>
                    <h3 className='text-xs'>{sportsman.attributes.rank}</h3>
                  </div>
                </Link>
              )}
            )}
          </div>
        </div>
        <div className='mt-12'>
          <h1 className='font-semibold lg:text-xl text-base mb-2'>Участники</h1>
          <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-8'>
            {dataResult.value.participants.data.map(sportsman => {
              const firstImage = sportsman.attributes.images.data.length > 0 ? sportsman.attributes.images.data[0].attributes.url : undefined
              return (
                <Link 
                  key={sportsman.id}
                  href={`/sportsmans/${sportsman.id}`} 
                  className='lg:text-base text-sm text-center rounded-3xl bg-primary shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300'
                >
                  <ImageComponent 
                    src={firstImage}
                    alt="Фото"
                    fill={false}
                    width={600}
                    height={600}
                    className='w-full md:aspect-[5/6] aspect-square mx-auto object-cover rounded-t-3xl'
                  />
                  <div className='p-3'>
                    <h2 className='font-medium mb-0.5'>{sportsman.attributes.fio}</h2>
                    <h3 className='text-xs'>{sportsman.attributes.rank}</h3>
                  </div>
                </Link>
              )}
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
