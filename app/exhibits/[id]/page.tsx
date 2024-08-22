import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import Markdown from '@/components/Markdown';
import PhotoSlider from '@/components/PhotoSlider';
import PhotoZoom from '@/components/PhotoZoom';
import { getExhibitById } from '@/lib/queries/exhibits';
import React from 'react'
import Open3DModel from './Open3DModel';

export default async function Exhibit({
  params: { id },
}: {
  params: { id: string },
}) {

  const [ dataResult ] =  await Promise.allSettled([ getExhibitById(id) ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Экспонат"
      notFound
      goBack
    />
  );

  const images = dataResult.value.attributes.images.data.map(img => {
    return {src: img.attributes.url, alt: dataResult.value.attributes.title}
  })
    
  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[{ title: "Экспонаты", slug: "exhibits" }, { title: dataResult.value.attributes.title, slug: dataResult.value.id }]} />

      <div className="mb-24 mt-10 flex flex-col items-start lg:gap-12 gap-6 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mb-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <h1 className="text-foreground text-xl font-bold lg:text-2xl">
              {dataResult.value.attributes.title}
            </h1>
          </div>

          <div className='w-full'>
            <Markdown data={dataResult.value.attributes.text} className=''/>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {images.length === 1 ? (
            <PhotoZoom
              src={images[0].src}
              alt={images[0].alt}
            />
          ) : (
            <PhotoSlider data={images} />
          )}
          <div className="mt-3 flex justify-end flex-wrap gap-3">
            <Open3DModel data={dataResult.value.attributes.model3d.data} />
            {/* <OpenPDF data={data} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
