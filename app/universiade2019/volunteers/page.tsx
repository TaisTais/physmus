import Link from 'next/link'
import React from 'react'

export default function Volunteers() {
    return (
        <div className='sm:w-4/5 container my-16'>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Волонтеры</h1>
            </div>
            <div className='mt-16'>
                <p>Помощь организаторам в проведении состязаний Зимней универсиады 2019 оказывали более 5 000 волонтеров из Красноярского края, других регионов России и стран зарубежья: США, Ганы, Италии, Мадагаскара, Шри-Ланки и др.</p>
                <p className='mt-6'>
                    Была разработана 
                    <Link 
                        href={"/7. Программа Волонтеры 2019.pdf"} 
                        target='__blank' 
                        className='mx-1 underline text-primary-foreground hover:text-accent-sfu transition-all'
                    >программа волонтеров 2019</Link>.
                </p>
                <p className='mt-6'>
                    Работу волонтеров на Зимней универсиаде 2019 координировал 
                    <Link 
                        href={"/8. Положение о Волонтерском центре СФУ.pdf"} 
                        target='__blank' 
                        className='mx-1 underline text-primary-foreground hover:text-accent-sfu transition-all'
                    >Волонтерский центр СФУ</Link>.
                </p>
            </div>
        </div>
    )
}
