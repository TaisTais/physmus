import Markdown from '@/components/Markdown';
import ErrorHandler from '@/components/errors/ErrorHandler';
import React from 'react'
import SportsmansList from './SportsmansList';
import { getUniSportById } from '@/lib/queries/universiade/uni-sports';

export default async function Sport({
    params: { id },
    searchParams,
}: {
    params: { id: string },
    searchParams: { [key: string]: string | string[] | undefined },
}) {

    const [ dataResult ] = await Promise.allSettled([
        getUniSportById(id)
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
        <div className='flex flex-col'>
            <p className='text-sm text-primary-foreground'>{dataResult.value.attributes.category.data?.attributes.title}</p>
            <h1 className='font-bold lg:text-3xl sm:text-2xl text-xl mt-2 mb-3'>{dataResult.value.attributes.title}</h1>
            <Markdown 
                data={dataResult.value.attributes.description}
                moreButton
                className='text-sm'
            />
        </div>
        <div className='mt-16'>
            <SportsmansList searchParams={searchParams} sportId={id} />
        </div>
    </div>
  )
}
