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
      <div className='flex flex-col gap-24'>
        <div>
          <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
            <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.culture.title}</h1>
          </div>
          {dataResult.value.culture.objects.map((object,index) =>
            <div key={index} className='flex flex-col mt-8 px-12 bg-gradient-to-r from-gradient-sky to-gradient-pink py-8 gap-4 rounded-2xl'>
              <h2  className='font-bold lg:text-4xl text-3xl text-accent-pink'>{object.title}</h2>
              <p className='font-semibold text-accent-sky'>{object.address}</p>
              <p className=''>{object.text}</p>
            </div>
          )}
        </div>
        
        <div>
          <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
            <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.housing.title}</h1>
          </div>
          {dataResult.value.housing.objects.map((object,index) =>
            <div key={index} className='flex flex-col mt-8 px-12 bg-gradient-to-r from-gradient-sky to-gradient-pink py-8 gap-4 rounded-2xl'>
              <h2  className='font-bold lg:text-4xl text-3xl text-accent-pink'>{object.title}</h2>
              <p className='font-semibold text-accent-sky'>{object.address}</p>
              <p className=''>{object.text}</p>
            </div>
          )}
        </div>
        
        <div>
          <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
            <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.sport.title}</h1>
          </div>
          <Table className='mt-8'>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-left font-bold text-accent-sky'>Спортивные объекты</TableHead>
                    <TableHead className='text-left font-bold text-accent-pink'>Вид спорта</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataResult.value.sport.sportComplex.map(item => (
                    <TableRow key={item.complex}>
                        <TableCell>{item.complex}</TableCell>
                        <TableCell>{item.sport}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
