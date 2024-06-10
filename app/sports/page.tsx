import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSportsCategories } from '@/lib/queries/sports';
import React from 'react'
import SportsArray from './SportsArray';
import Breadcrumbs from '@/components/Breadcrumbs';

export default async function Sports() {

    const [ dataResult ] = await Promise.allSettled([
        getSportsCategories()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Категории видов спорта" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[{ title: "Виды спорта", slug: "sports" }]} />

            <h1 className='font-bold lg:text-2xl text-lg'>Виды спорта</h1>
            <div className='my-16'>
                {dataResult.value.data.map((category) => (
                    <div key={category.id} className='mb-20'>
                        <div 
                            className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 pb-2 mb-4'
                            style={{borderColor: category.attributes.color ?? undefined}}
                        >
                            <h1 className='font-semibold lg:text-xl text-base'>{category.attributes.title}</h1>
                        </div>
                        <SportsArray data={category.attributes.sports.data} color={category.attributes.color} />
                    </div>
                ))}
            </div>
        </div>
    )
}
