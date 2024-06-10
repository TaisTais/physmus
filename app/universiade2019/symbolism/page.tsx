import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Symbolism() {
    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                {title: "Универсиада", slug: "universiade2019"}, 
                {title: "Символика", slug: "symbolism" },
            ]}/>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Символика</h1>
            </div>
            <div className='flex flex-col items-center gap-24 mt-16'>
                <div>
                    <h1 className='font-semibold lg:text-lg text-sm text-center mb-3'>Логотип Зимней универсиады 2019</h1>
                    <Image 
                        src="/universiade-symbol.png"
                        alt="Логотип универсиады"
                        width={384}
                        height={256}
                        className='mx-auto object-contain max-w-96 w-full shadow'
                    />
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold lg:text-lg text-sm text-center mb-3'>Брендбук Зимней универсиады 2019</h1>
                    <p className='text-center mb-3 lg:w-4/5 lg:text-sm text-xs'>
                        В рамках реализации концепции фирменного стиля Зимней универсиады 2019 Исполнительной дирекцией XXIX Всемирной зимней универсиады 2019 года в г. Красноярске было разработано Руководство по применению элементов фирменного стиля Зимней универсиады 2019.
                    </p>
                    <Link href={"/2. Руководство по применению элементов фир. стиля ЗУ 2019.pdf"} target='__blank' className='w-full'>
                        <Image 
                            src="/universiade-brandbook.png"
                            alt="Брендбук универсиады"
                            width={384}
                            height={256}
                            className='mx-auto object-contain max-w-96 w-full shadow'
                        />
                    </Link>
                    <Link href={"/2. Руководство по применению элементов фир. стиля ЗУ 2019.pdf"} target='__blank' className='w-fit mt-3'>
                        <Button className='mx-auto bg-primary-foreground'>Открыть</Button>
                    </Link>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold lg:text-lg text-sm text-center mb-3'>Талисман Зимней универсиады 2019</h1>
                    <p className='text-center mb-3 lg:w-4/5 lg:text-sm text-xs'>
                        Талисманом универсиады стала U-лайка (Юлайка) – сибирская лайка, символ верности, дружелюбия, радости и неукротимой энергии.
                    </p>
                    <Image 
                        src="/universiade-laika.png"
                        alt="Брендбук универсиады"
                        width={750}
                        height={550}
                        quality={100}
                        className='mx-auto object-contain max-w-[750px] w-full shadow'
                    />
                </div>
            </div>
        </div>
    )
}
