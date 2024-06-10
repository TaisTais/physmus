import Markdown from '@/components/Markdown'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { data } from './data'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function SitesHeritage() {

    const text = `
## **Культурные и общественные объекты:**
- Общественный центр СФУ (конгресс-холл);
- Медицинский центр в Деревне Зимней универсиады 2019 (после Универсиады данный центр осуществляет поликлиническое обслуживание студентов и сотрудников Сибирского федерального университета, помимо этого, в здании центра размещен ряд научно-исследовательских лабораторий по биомедицинской тематике. Мощность центра – 400 посещений в смену. Высококвалифицированную помощь оказывают с использованием современного оборудования силами врачебного коллектива Федерального медико-биологического агентства. К центру прикреплены более 23 тысяч студентов СФУ).    

## **Жилые комплексы:**
- комплекс общежитий для студентов «Перья» – резиденция волонтеров и вспомогательного персонала (используются в данный момент как студенческие общежития);
- Деревня Зимней универсиады 2019 разместится в кампусе Сибирского федерального университета общей площадью 25,4 га. В ней располагались делегации стран-участниц и более 5 000 волонтеров данного спортивного мероприятия. Многофункциональный сервис-холл Деревни вмещал в себя фитнес-зал, лаундж-зону, почтовое отделение, сувенирную лавочку, мини-кофейню, салон красоты и многое другое. Для спортсменов Деревни проводился Фестиваль компьютерных игр «Let’s play». Активное участие принимали спортсмены из России, Израиля, Франции, Канады, а также сборная команда организаторов Зимней универсиады 2019.

## **Спортивные объекты:**
`

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
              {title: "Универсиада", slug: "universiade2019"}, 
              {title: "Объекты и наследие", slug: "sites-heritage" }
            ]}/>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Объекты и наследие</h1>
            </div>
            <div className='mt-16'>
                <Markdown data={text} moreButton={false}/>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-center'>Спортивные объекты</TableHead>
                        <TableHead className='text-center'>Вид спорта</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.types}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
