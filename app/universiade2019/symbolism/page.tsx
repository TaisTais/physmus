import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorHandler from '@/components/errors/ErrorHandler'
import { getSymbolismUniversiade } from '@/lib/queries/universiade/getSymbolismUniversiade'
import { CarouselItem } from '@/components/ui/carousel'
import ImageComponent from '@/components/ImageComponent'
import CarouselComp from '@/components/content/CarouselComp'

export default async function Symbolism() {
    
  const [ dataResult ] = await Promise.allSettled([
    getSymbolismUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Символика" 
      notFound
      goBack={false}
    />
  );
    
    
  return (
    <div className='my-16'>
      <div className='sm:w-4/5 container'>
        <Breadcrumbs data={[
          {title: "Универсиада", slug: "universiade2019"}, 
          {title: "Символика", slug: "symbolism" },
        ]}/>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
            <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
        </div>
        {dataResult.value.items.length > 0 && (
          <CarouselComp classNameContainer="w-full mt-10 mb-24">
            {dataResult.value.items.map((item, indx) => (
              <CarouselItem key={indx} className="basis-1/3 flex flex-col items-center justify-start gap-1">
                <p className='font-medium lg:text-lg text-base'>{item.title}</p>
                <ImageComponent 
                  src={item.image.data.attributes.url} 
                  alt=''
                  fill={false}
                  width={500}
                  height={500}
                  className="h-auto w-full max-h-44 object-contain mt-6"
                />
              </CarouselItem>
            ))}
          </CarouselComp>
        )}
      </div>
      
      <div className='bg-gradient-to-r from-gradient-sky to-gradient-pink py-8 mb-24'>
        <div className='flex flex-row justify-between items-center sm:w-4/5 container'>
          <div className='flex flex-col gap-2'>
              <h1 className='font-semibold lg:text-lg text-sm text-left mb-3'>{dataResult.value.brandbook.title}</h1>
              <p className='text-left mb-3 lg:w-4/5 lg:text-sm text-xs'>{dataResult.value.brandbook.text}</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <Link href={"/2. Руководство по применению элементов фир. стиля ЗУ 2019.pdf"} target='__blank' className='w-full'>
              <ImageComponent 
                  src={dataResult.value.brandbook.image.data?.attributes.url}
                  alt="Брендбук универсиады"
                  fill={false}
                  width={700}
                  height={400}
                  className='w-3xl'
              />
            </Link>
            <Link href={dataResult.value.brandbook.brandbookDoc.data.attributes.url} target='__blank' className='w-fit mt-3'>
                <Button className='bg-primary'>Открыть</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className='flex flex-row justify-between items-center sm:w-4/5 container'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold lg:text-lg text-sm text-left mb-3'>{dataResult.value.mascot.title}</h1>
          <p className='text-left mb-3 lg:w-4/5 lg:text-sm text-xs'>{dataResult.value.mascot.text}</p>
        </div>
        <ImageComponent 
            src={dataResult.value.mascot.image.data?.attributes.url}
            alt="Брендбук универсиады"
            fill={false}
            width={850}
            height={350}
            quality={100}
            className='mx-auto object-contain max-w-[850px] w-full shadow'
        />
      </div>
    </div>
  )
}
