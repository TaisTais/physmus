import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getUniGallery } from '@/lib/queries/universiade/getUniGallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhotoZoom from '@/components/PhotoZoom';

export default async function Gallery() {
  
  const [ dataResult ] = await Promise.allSettled([
    getUniGallery()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Галерея Универсиады" 
      notFound
      goBack={false}
    />
  );
    
  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: dataResult.value.title, slug: "gallery" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 mb-6'>
        <h1 className='font-semibold lg:text-2xl text-lg'>{dataResult.value.title}</h1>
      </div>
      <Tabs defaultValue="images" className="w-full">
        <TabsList className='w-full bg-primary gap-4'>
          <TabsTrigger value="images" className='text-base font-medium'>Фото</TabsTrigger>
          <TabsTrigger value="videos" className='text-base font-medium'>Видео</TabsTrigger>
        </TabsList>
        <TabsContent value="images" className='mt-6'>
          <div className='flex flex-col gap-16'>
            {dataResult.value.imageBlocks.map((item, indx) => (
              <div key={indx} className=''>
                <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2 mb-6'>
                  <h1 className='font-semibold lg:text-xl text-base'>{item.title}</h1>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                  {item.images.data.map((img, indxImg) => (
                    <PhotoZoom key={indxImg} src={img.attributes.url} alt={img.attributes.alternativeText ?? ""} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos" className='mt-6'>
          <div className='flex flex-col gap-16'>
            {dataResult.value.videoBlocks.map((item, indx) => (
              <div key={indx} className=''>
                <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2 mb-6'>
                  <h1 className='font-semibold lg:text-xl text-base'>{item.title}</h1>
                </div>
                <div className='grid grid-cols-1 gap-8'>
                  {item.videos.data.map((video, indxVideo) => (
                    <video key={indxVideo} src={video.attributes.url} controls className='rounded-3xl'/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
