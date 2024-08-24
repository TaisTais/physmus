import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getSitesHeritageUniversiade } from '@/lib/queries/universiade/getSitesHeritageUniversiade'
import ErrorHandler from '@/components/errors/ErrorHandler'

export default async function SitesHeritage() {

    const [ dataResult ] = await Promise.allSettled([
        getSitesHeritageUniversiade()
      ]);
      if (dataResult.status === "rejected") return (
        <ErrorHandler
          error={dataResult.reason as unknown}
          place="Объекты и Наследие" 
          notFound
          goBack={false}
        />
      );

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
              {title: "Универсиада", slug: "universiade2019"}, 
              {title: "Объекты и наследие", slug: "sites-heritage" }
            ]}/>
            <div className='flex flex-col mb-24'>
                <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                    <h1 className='font-semibold lg:text-xl text-base'>Культурные объекты и наследие</h1>
                </div>
                <div className='flex flex-col mt-8 px-12 py-10 bg-gradient gap-4 rounded-2xl'>
                    <h2 className='font-bold lg:text-4xl text-3xl text-accent-pink'>{dataResult.value.culture[0].title}</h2>
                    <p className='font-semibold text-accent-sky'>{dataResult.value.culture[0].address}</p>
                    <p className=''>{dataResult.value.culture[0].text}</p>
                </div>
                <div className='flex flex-col mt-8 px-12 py-10 bg-gradient gap-4 rounded-2xl'>
                    <h2 className='font-bold lg:text-4xl text-3xl text-accent-pink'>{dataResult.value.culture[1].title}</h2>
                    <p className='font-semibold text-accent-sky'>{dataResult.value.culture[1].address}</p>
                    <p className=''>{dataResult.value.culture[1].text}</p>
                </div>
            </div>
            
            <div className='flex flex-col mb-24'>
                <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                    <h1 className='font-semibold lg:text-xl text-base'>Жилые комплексы</h1>
                </div>
                <div className='flex flex-col mt-8 px-12 py-10 bg-gradient gap-4 rounded-2xl'>
                    <h2 className='font-bold lg:text-4xl text-3xl text-accent-pink'>{dataResult.value.housing[0].title}</h2>
                    <p className='font-semibold text-accent-sky'>{dataResult.value.housing[0].address}</p>
                    <p className=''>{dataResult.value.housing[0].text}</p>
                </div>
                <div className='flex flex-col mt-8 px-12 py-10 bg-gradient gap-4 rounded-2xl'>
                    <h2 className='font-bold lg:text-4xl text-3xl text-accent-pink'>{dataResult.value.housing[1].title}</h2>
                    <p className='font-semibold text-accent-sky'>{dataResult.value.housing[1].address}</p>
                    <p className=''>{dataResult.value.housing[1].text}</p>
                </div>
            </div>
            
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-center'>Спортивные объекты</TableHead>
                        <TableHead className='text-center'>Вид спорта</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataResult.value.sportComplex.map(item => (
                        <TableRow key={item.complex}>
                            <TableCell>{item.complex}</TableCell>
                            <TableCell>{item.sport}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
