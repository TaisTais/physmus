import type { TextBlockT } from '@/lib/types/main'
import { cn } from '@/lib/utils'
import React from 'react'
import Markdown from '../Markdown'
import { ClientHydration } from '../errors/ClientHydration'
import CarouselLoading from '../loadings/CarouselLoading'
import ImageComponent from '../ImageComponent'
import { Skeleton } from '../ui/skeleton'
import CarouselComp from './CarouselComp'
import { CarouselItem } from '../ui/carousel'

export default function TextBlock({
  data,
  className
}: {
  data: TextBlockT | null,
  className?: string,
}) {

  if (!data) return null;

  return (
    <div className={cn("w-full", className)}>
      {data.title && (
        <h2 className='lg:text-3xl text-2xl font-semibold text-foreground border-b-2 border-foreground pb-3 mb-6'>
          {data.title}
        </h2>
      )}
      <div className={cn(
        'flex items-stretch lg:flex-row flex-col-reverse',
        data.images.data.length > 0 ? "gap-6" : "gap-0",
        data.images.data.length > 1 ? "lg:gap-16 gap-6" : "gap-6",
      )}>
        <div className={cn(
          'w-full',
          data.images.data.length > 0 ? "lg:w-1/2 h-fit" : "lg:w-full"
        )}>
          <Markdown data={data.text} />
        </div>
        {data.images.data.length > 1
          ? (
            <ClientHydration fallback={<CarouselLoading className='lg:w-1/2 w-full lg:aspect-[8/6] max-h-96 lg:mb-0 mb-6'/>}>
              <CarouselComp classNameContainer='lg:w-1/2 w-full' className='lg:-ml-8 -ml-4 items-center'>
                {data.images.data.map((image, index) => (
                  <CarouselItem key={index} className='h-fit lg:pl-8 pl-4 flex items-center'>
                    <div className='relative w-full h-fit'>
                      <ImageComponent 
                        src={image.attributes.url}
                        alt=""
                        fill
                        sizes='(max-width: 1024px) 100vw, 50vw'
                        className='!lg:absolute !relative object-contain rounded-3xl overflow-hidden !h-fit'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselComp>
            </ClientHydration>
          )
          : data.images.data.length > 0 ? (
            <div className='relative lg:w-1/2 w-full lg:h-auto h-fit rounded-3xl overflow-hidden'>
              <ClientHydration fallback={<Skeleton className='w-full h-full lg:max-h-none max-h-96'/>}>
                <ImageComponent
                  src={data.images.data[0].attributes.url}
                  alt=""
                  fill
                  sizes='(max-width: 1280px) 100vw, 50vw'
                  className='!lg:absolute !relative object-contain lg:max-h-none max-h-96'
                />
              </ClientHydration>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}
