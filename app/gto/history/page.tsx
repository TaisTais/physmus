import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import Markdown from '@/components/Markdown';
import { getGtoHistory } from '@/lib/queries/gto';
import React from 'react'

export default async function GtoHistory() {
    const [ dataResult ] = await Promise.allSettled([
        getGtoHistory()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="История комплекса ГТО" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                { title: "Комплекс ГТО", slug: "gto" },
                { title: "История комплекса ГТО", slug: "history" }
            ]}/>

            <h1 className='font-bold lg:text-2xl text-lg'>История комплекса ГТО</h1>

            <div className='my-16'>
                <Markdown data={dataResult.value.text}/>
            </div>
        </div>
    )
}
