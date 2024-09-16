import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import Markdown from '@/components/Markdown';
import PhotoZoom from '@/components/PhotoZoom';
import { getGtoSigns } from '@/lib/queries/gto';
import React from 'react'

export default async function GtoSigns() {
    const [ dataResult ] = await Promise.allSettled([
        getGtoSigns()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Знаки отличия комплекса ГТО" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                { title: "Комплекс ГТО", slug: "gto" },
                { title: "Знаки отличия комплекса ГТО", slug: "signs" }
            ]}/>

            <h1 className='font-bold lg:text-2xl text-lg'>Знаки отличия комплекса ГТО</h1>

            <div className='my-16'>
                <Markdown data={dataResult.value.text}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {dataResult.value.items.map((item, indx) => (
                        <div key={indx} className='flex flex-col gap-1 items-center justify-center'>
                            <PhotoZoom src={item.image.data?.attributes.url} alt={item.title ?? ""} />
                            <p className='text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
