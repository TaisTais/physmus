import Breadcrumbs from '@/components/Breadcrumbs';
import ImageComponent from '@/components/ImageComponent';
import Markdown from '@/components/Markdown';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSportsmanById } from '@/lib/queries/sportsman';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

export default async function Sportsman({
    params: { id },
}: {
    params: { id: string },
}) {

    const [ dataResult ] =  await Promise.allSettled([ getSportsmanById(id) ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Спортсмен"
          notFound
          goBack
        />
    );

    const firstImage = dataResult.value.attributes.images.data.length > 0 ? dataResult.value.attributes.images.data[0].attributes.url : undefined
    const sports = dataResult.value.attributes.sports.data
    // const uni_sport = dataResult.value.attributes.uni_sport.data

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[{ title: "Наша гордость", slug: "sportsmans" }, { title: dataResult.value.attributes.fio, slug: dataResult.value.id }]} />
            <div className='flex md:flex-row flex-col gap-8 w-full md:h-80 md:mb-10 mb-6'>
                <ImageComponent 
                    src={firstImage}
                    alt="Фото"
                    fill={false}
                    width={215}
                    height={320}
                    className='md:aspect-[2/3] aspect-square mx-auto object-cover rounded-3xl'
                />
                <div className='w-full h-full bg-primary flex flex-col gap-3 lg:p-12 p-6 rounded-3xl'>
                    <h1 className='font-semibold lg:text-3xl sm:text-2xl text-xl '>{dataResult.value.attributes.fio}</h1>
                    <p className='font-medium'>{dataResult.value.attributes.rank}</p>
                    <div className='w-full'>
                      <Markdown data={dataResult.value.attributes.info}  className='prose-sm'/>
                    </div>
                    <div className='flex flex-wrap gap-x-3 gap-y-2 text-sm mt-3'>
                        {sports.map(sport => (
                            <Link
                                key={sport.id}
                                href={`/sports/${sport.id}`}
                                className={cn(
                                    'py-1 px-3 rounded-2xl shadow text-background',
                                    'opacity-90 hover:opacity-100 hover:shadow-md hover:scale-105 transition-all duration-300'
                                )}
                                style={{backgroundColor: sport.attributes.category.data?.attributes.color ?? undefined}}
                            >
                                {sport.attributes.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <Markdown data={dataResult.value.attributes.additional_info}  className='prose-sm'/>
            </div>
        </div>
    )
}
