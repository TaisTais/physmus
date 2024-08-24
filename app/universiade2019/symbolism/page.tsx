import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorHandler from '@/components/errors/ErrorHandler'
import { getSymbolismUniversiade } from '@/lib/queries/universiade/getSymbolismUniversiade'

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
      <div className='sm:w-4/5 container my-16'>
          <Breadcrumbs data={[
              {title: "Универсиада", slug: "universiade2019"}, 
              {title: "Символика", slug: "symbolism" },
          ]}/>
          <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
              <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
          </div>
          <div className='flex flex-col items-center gap-24 mt-4'>
            <div className="flex flex-row gap-36 my-12 lg:justify-start justify-center">
              <div className='flex flex-col items-start gap-4'>
                <p className='font-medium lg:text-lg text-base'>{dataResult.value.symbols.data[0].attributes.alternativeText}</p>
                <Image 
                src={dataResult.value.symbols.data[0].attributes.url} 
                alt=''
                width={300}
                height={300}
                className="object-contain xl:w-[300px] xl:h-[300px] lg:w-20 lg:h-20 w-24 h-24"
                />
              </div>
              <div className='flex flex-col items-start gap-4'>
                <p className='font-medium lg:text-lg text-base'>{dataResult.value.symbols.data[1].attributes.alternativeText}</p>
                <Image 
                    src={dataResult.value.symbols.data[1].attributes.url} 
                    alt=''
                    width={200}
                    height={300}
                    className="object-contain xl:w-[200px] xl:h-[300px] lg:w-20 lg:h-20 w-24 h-24"
                />
              </div>
           
            
            <div className="flex flex-col gap-24">
              <div className='flex flex-col items-start gap-4'>
                <p className='font-medium lg:text-lg text-base'>{dataResult.value.symbols.data[2].attributes.alternativeText}</p>
                <Image 
                    src={dataResult.value.symbols.data[2].attributes.url} 
                    alt=''
                    width={200}
                    height={200}
                    className="object-contain xl:w-[200px] xl:h-[100px] lg:w-20 lg:h-20 w-24 h-24"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className='font-medium lg:text-lg text-base'>{dataResult.value.symbols.data[3].attributes.alternativeText}</p>
                <Image 
                    src={dataResult.value.symbols.data[3].attributes.url} 
                    alt=''
                    width={350}
                    height={60}
                    className="object-contain xl:w-[350px] xl:h-[60px] lg:w-20 lg:h-20 w-24 h-24"
                />
              </div>
            </div>
          </div>
            
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold lg:text-lg text-sm text-left mb-3'>{dataResult.value.brandbook.title}</h1>
                    <p className='text-left mb-3 lg:w-4/5 lg:text-sm text-xs'>{dataResult.value.brandbook.text}</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link href={"/2. Руководство по применению элементов фир. стиля ЗУ 2019.pdf"} target='__blank' className='w-full'>
                        <Image 
                            src={dataResult.value.brandbook.images.data[0].attributes.url}
                            alt="Брендбук универсиады"
                            width={816}
                            height={400}
                            className='max-w-3xl w-full shadow'
                        />
                    </Link>
                    <Link href={"/2. Руководство по применению элементов фир. стиля ЗУ 2019.pdf"} target='__blank' className='w-fit mt-3'>
                        <Button className='bg-primary-foreground'>Открыть</Button>
                    </Link>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col gap-2'>
                <h1 className='font-semibold lg:text-lg text-sm text-left mb-3'>{dataResult.value.mascot.title}</h1>
                <p className='text-left mb-3 lg:w-4/5 lg:text-sm text-xs'>{dataResult.value.mascot.text}</p>
              </div>
                <Image 
                    src={dataResult.value.mascot.images.data[0].attributes.url}
                    alt="Брендбук универсиады"
                    width={850}
                    height={350}
                    quality={100}
                    className='mx-auto object-contain max-w-[850px] w-full shadow'
                />
            </div>
          </div>
      </div>
    )
}
