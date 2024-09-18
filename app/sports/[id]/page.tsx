import Markdown from '@/components/Markdown';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSportById } from '@/lib/queries/sports';
import React from 'react'
import SportsmansList from './SportsmansList';
import Breadcrumbs from '@/components/Breadcrumbs';
import "./timeline.css";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ImageComponent from '@/components/ImageComponent';

export default async function Sport({
  params: { id },
  searchParams,
}: {
  params: { id: string },
  searchParams: { [key: string]: string | string[] | undefined },
}) {

  const [ dataResult ] = await Promise.allSettled([
    getSportById(id)
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Вид спорта" 
      notFound
      goBack
    />
  );

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[{ title: "Виды спорта", slug: "sports" }, { title: dataResult.value.attributes.title, slug: dataResult.value.id }]} />
        
      <div className='flex flex-col'>
        <p className='text-sm'>{dataResult.value.attributes.category.data?.attributes.title}</p>
        <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl mt-2 mb-3'>{dataResult.value.attributes.title}</h1>
        <div className='lg:px-12 lg:py-8 p-6 bg-primary rounded-3xl'>
          <Markdown 
            data={dataResult.value.attributes.description}
            moreButton
            className='prose-sm'
          />
        </div>
      </div>

      {dataResult.value.attributes.images.data.length > 0 && (
        <div className='mt-8'>
          <Carousel
            opts={{
              align: "start",
            }}
            className="md:w-full w-5/6 mx-auto"
          >
            <CarouselContent className='items-center'>
              {dataResult.value.attributes.images.data.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ImageComponent 
                    src={photo.attributes.url}
                    alt="Фото"
                    fill={false}
                    width={460}
                    height={310}
                    className='w-full h-auto mx-auto object-contain rounded-3xl'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {(dataResult.value.attributes.history && dataResult.value.attributes.history?.length > 0) && (
        <div className='mt-16'>
          <Markdown 
            data={dataResult.value.attributes.history}
          />
        </div>
      )}

      {dataResult.value.attributes.historyImages.data.length > 0 && (
        <div className='mt-8'>
          <Carousel
            opts={{
              align: "start",
            }}
            className="md:w-full w-5/6 mx-auto"
          >
            <CarouselContent className='items-center'>
              {dataResult.value.attributes.historyImages.data.map((photo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <ImageComponent 
                    src={photo.attributes.url}
                    alt="Фото"
                    fill={false}
                    width={460}
                    height={310}
                    className='w-full h-auto mx-auto object-contain rounded-3xl'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}

      {dataResult.value.attributes.timeline.length > 0 && (
        <div className='mt-16'>
          <ul className='timeline lg:translate-x-[12.5rem] lg:max-w-[calc(100%-12.5rem)]'>
            {dataResult.value.attributes.timeline.map((item, indx) => (
              <>
                <li key={indx}>
                  <div className='max-w-[1336px] lg:-translate-x-64'>
                    <div className='relative -top-5 flex lg:flex-row flex-col lg:gap-16'>
                      <h4 className='w-48 text-tertriary font-bold text-5xl break-words whitespace-pre-wrap mb-3'>
                        {item.title}
                      </h4>
                      <Markdown 
                        data={item.description}
                        moreButton
                        className='prose-sm flex-1'
                      />
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      )}

      <div className='mt-16'>
        <SportsmansList searchParams={searchParams} sportId={id} />
      </div>
    </div>
  )
}
