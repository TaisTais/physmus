import SearchField from '@/components/SearchField'
import React from 'react'
import Content from './Content'

export default function Winners({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined },
}) {

  return (
    <div className='sm:w-4/5 container mt-16'>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
            <h1 className='font-semibold lg:text-xl text-base'>
                Победители, призеры и участники СФУ
            </h1>
            <SearchField placeholder='Поиск по имени' className='rounded-full' />
        </div>
        <Content searchParams={searchParams} className="mt-6" />
    </div>
  )
}
