import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorHandler from '@/components/errors/ErrorHandler';
import Markdown from '@/components/Markdown';
import { getGtoDocs } from '@/lib/queries/gto';
import { cn } from '@/lib/utils';
import { File } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function GtoDocs() {
    const [ dataResult ] = await Promise.allSettled([
        getGtoDocs()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Документы комплекса ГТО" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                { title: "ГТО", slug: "gto" },
                { title: "Документы комплекса ГТО", slug: "docs" }
            ]}/>

            <h1 className='font-bold lg:text-2xl text-lg'>Документы комплекса ГТО</h1>

            <div className='my-16'>
                <Markdown data={dataResult.value.text}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {dataResult.value.items.map((item, indx) => (
                        <>
                        {item.file.data ? (
                            <Link
                                key={indx}
                                href={item.file.data?.attributes.url}
                                target='__blank'
                                className={cn(
                                    'flex items-center gap-2',
                                    'py-6 px-10 text-primary-foreground bg-primary font-medium rounded-2xl shadow-md',
                                    'opacity-90 hover:opacity-100 hover:shadow-lg hover:scale-105 transition-all duration-300'
                                )}
                            >
                                <File className=''/>
                                <span className=' opacity-100'>{item.title}</span>
                            </Link>
                        ) : null}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
