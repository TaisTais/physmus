import Breadcrumbs from '@/components/Breadcrumbs'
import ErrorHandler from '@/components/errors/ErrorHandler';
import NumberTicker from '@/components/magicui/number-ticker';
import Markdown from '@/components/Markdown';
import { getVolunteersUniversiade } from '@/lib/queries/universiade/getVolunteersUniversiade';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default async function Volunteers() {
  
  const [ dataResult ] = await Promise.allSettled([
    getVolunteersUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Волонтеры универсиады" 
      notFound
      goBack={false}
    />
  );

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
          {title: "Универсиада", slug: "universiade2019"}, 
          {title: "Волонтеры", slug: "volunteers" },
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
      </div>
      <div className='flex flex-row justify-between items-center gap-14 my-16 mb-20'>
        <div>
          <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky tracking-normal !leading-none">{dataResult.value.amount.upperLine}</p>
          <NumberTicker value={dataResult.value.amount.number} className="2xl:text-8xl xl:text-7xl sm:text-6xl text-5xl font-extrabold tracking-normal !leading-none text-accent-pink w-auto"></NumberTicker>
          <p className="2xl:text-3xl xl:text-2xl sm:text-2xl text-1xl font-bold text-accent-sky text-right tracking-normal !leading-none">{dataResult.value.amount.lowerLine}</p>
        </div>
        <p className='px-10 py-10 bg-gradient-to-r from-gradient-sky to-gradient-pink w-full rounded-2xl text-base !leading-relaxed'>{dataResult.value.description}</p>
      </div>
      <Markdown data={dataResult.value.text} moreButton={false}/>

      <ul className="flex flex-col gap-4">
        {dataResult.value.documents.data.map((item, index) => (
            <li key={index}>
                <Link 
                    href={item.attributes.url} 
                    target='__blank' 
                    className='flex items-center w-fit gap-2'
                >
                    <FileText className='w-7 h-7' />
                    <p className='flex-1 link-underline link-underline-sm link-underline-primary font-bold py-1 transition-all duration-300'>
                      {item.attributes.alternativeText}
                    </p>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}
