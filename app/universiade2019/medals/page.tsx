import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { allData } from './data'

export default function Medals() {

    return (
        <div className='sm:w-4/5 container my-16'>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Медальный зачет</h1>
            </div>
            <div className='mt-16'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold lg:text-lg text-sm text-center mb-3'>Медальный зачет XXIХ Всемирной зимней универсиады</h1>
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
                        {allData.map((item, index) => (
                            <TableRow key={item.name}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className='text-center'>{item.gold}</TableCell>
                                <TableCell className='text-center'>{item.silver}</TableCell>
                                <TableCell className='text-center'>{item.bronze}</TableCell>
                                <TableCell className='text-center'>{item.all}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
