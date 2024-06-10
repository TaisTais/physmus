import ImageComponent from '@/components/ImageComponent';
import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSportsmanById } from '@/lib/queries/sportsman';
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
    const sport = dataResult.value.attributes.sport.data

    return (
        <div className='sm:w-4/5 container my-16'>
            <div className='flex lg:flex-row flex-col items-center gap-8 w-full lg:mb-10 mb-6'>
                <ImageComponent 
                    src={firstImage}
                    alt="Фото"
                    fill={false}
                    width={200}
                    height={200}
                    className='aspect-square object-cover rounded-2xl'
                />
                <div className='flex flex-col'>
                    <p className='text-sm text-primary-foreground'>Спортсмен{sport ? ", " + sport.attributes.title : ""}</p>
                    <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl mt-2 mb-3'>{dataResult.value.attributes.fio}</h1>
                </div>
            </div>

            <p className='py-2 px-6 rounded-full bg-light-peach text-sm w-fit lg:mx-0 mx-auto'>{dataResult.value.attributes.rank}</p>

            <div className='lg:py-10 lg:px-14 p-6 rounded-2xl bg-light-peach mt-12'>
                <p className='font-medium lg:mb-8 mb-6'>Достижения:</p>
                <ul className='flex flex-col gap-4'>
                    {dataResult.value.attributes.achievements.map((achievement, index) => (
                        <li key={index} className='flex gap-5 items-center'>
                            <span className='font-semibold lg:text-lg text-sm lg:min-w-10 min-w-8'>{achievement.year ? achievement.year : "____"}</span>
                            <p className='lg:text-sm text-xs'>{achievement.description}</p>
                        </li>
                    ))}
                </ul>
                <ul></ul>
            </div>
        </div>
    )
}
