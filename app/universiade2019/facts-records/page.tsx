import Breadcrumbs from '@/components/Breadcrumbs';
import { getFactsRecordsUniversiade } from '@/lib/queries/universiade/getFactsRecordsUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';
import React from 'react'

export default async function FactsRecords() {
    
    const [ dataResult ] = await Promise.allSettled([
        getFactsRecordsUniversiade()
      ]);
      if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Факты и рекорды" 
          notFound
          goBack={false}
        />
      );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                {title: "Универсиада", slug: "universiade2019"}, 
                {title: "Факты и рекорды", slug: "facts-records" }
            ]}/>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Факты и рекорды Универсиады-2019</h1>
            </div>
            
        </div>
    )
}
