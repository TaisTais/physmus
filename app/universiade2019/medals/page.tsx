import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getMedalsUniversiade } from '@/lib/queries/universiade/getMedalsUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';

export default async function Medals() {

  const [ dataResult ] = await Promise.allSettled([
    getMedalsUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Медальный зачет Универсиады" 
      notFound
      goBack={false}
    />
  );

  return (
    <div className='sm:w-4/5 container my-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "Медальный зачет", slug: "medals" }
      ]}/>
      <div className='flex flex-col gap-8 mb-16'>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">№</TableHead>
              <TableHead>Страна</TableHead>
              <TableHead className='text-center'>Золото</TableHead>
              <TableHead className='text-center'>Серебро</TableHead>
              <TableHead className='text-center'>Бронза</TableHead>
              <TableHead className='text-center'>Всего</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataResult.value.countries.map((country, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{country.country}</TableCell>
                <TableCell className='text-center'>{country.gold}</TableCell>
                <TableCell className='text-center'>{country.silver}</TableCell>
                <TableCell className='text-center'>{country.bronze}</TableCell>
                <TableCell className='text-center'>{country.gold + country.silver + country.bronze}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className='flex flex-col gap-8 mb-16'>
        <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
          <h2 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">№</TableHead>
              <TableHead>Вид спорта</TableHead>
              <TableHead>Страна</TableHead>
              <TableHead>Золото</TableHead>
              <TableHead>Серебро</TableHead>
              <TableHead>Бронза</TableHead>
              <TableHead>Всего</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataResult.value.countriesWithSports.map((sport, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{sport.sport}</TableCell>
                <TableCell>
                  {sport.countries.map(country => (
                    <TableRow key={country.country}>
                      <TableCell>{country.country}</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {sport.countries.map(country => (
                    <TableRow key={country.country}>
                      <TableCell>{country.gold}</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {sport.countries.map(country => (
                    <TableRow key={country.country}>
                      <TableCell>{country.silver}</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {sport.countries.map(country => (
                    <TableRow key={country.country}>
                      <TableCell>{country.bronze}</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {sport.countries.map(country => (
                    <TableRow key={country.country}>
                      <TableCell>{country.gold + country.silver + country.bronze}</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    </div>
  )
}

{/* <TableCell className='text-center'>{country.country}</TableCell>
                    <TableCell className='text-center'>{country.gold}</TableCell>
                    <TableCell className='text-center'>{country.silver}</TableCell>
                    <TableCell className='text-center'>{country.bronze}</TableCell>
                    <TableCell className='text-center'>{country.gold + country.silver + country.bronze}</TableCell> */}
