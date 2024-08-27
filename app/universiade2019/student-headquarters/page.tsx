import Breadcrumbs from '@/components/Breadcrumbs'
import ImageComponent from '@/components/ImageComponent'
import Link from 'next/link'
import React from 'react'

export default function StudentHeadquarters() {

    const headquarters = [
        {
            fio: "Дарья Брокс",
            image: "/headquarters/Брокс.jpg",
            post: "Руководитель штаба",
            sfuPost: "студентка Института экономики, управления и природопользования"
        },
        {
            fio: "Патракеева Екатерина",
            image: "/headquarters/Патракеева.jpg",
            post: "Заместитель руководителя по связям с общественностью",
            sfuPost: "студентка Института нефти и газа"
        },
        {
            fio: "Порошина Валерия",
            image: "/headquarters/Порошина.jpg",
            post: "Заместитель руководителя по развитию волонтерства",
            sfuPost: "студентка Института экономики, управления и природопользования"
        },
        {
            fio: "Гулова Парвина",
            image: "/headquarters/Гулова.jpg",
            post: "Заместитель руководителя по проектной деятельности",
            sfuPost: "студентка Института экономики, управления и природопользования СФУ"
        },
    ]

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
                {title: "Универсиада", slug: "universiade2019"}, 
                {title: "Студенческий штаб", slug: "student-headquarters" }
            ]}/>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Студенческий штаб</h1>
            </div>
            <div className='mt-16'>
                    <p>Одну из ключевых ролей по вовлечению обучающихся Сибирского федерального университета в проектную и волонтерскую деятельность, связанную с подготовкой и проведением XXIX Всемирной зимней универсиады, играл Студенческий штаб Зимней универсиады.</p>
                    <p className='my-6'>
                        Было разработано 
                        <Link 
                            href={'/5. Положение о студенческом штабе Зимней универсиады 2019.pdf'} 
                            target='__blank'
                            className='mx-1 underline text-primary-foreground hover:text-accent-orange transition-all'
                        > 
                            Положение «О студенческом штабе Зимней универсиады»
                        </Link> 
                        ФГАОУ ВО «Сибирский федеральный университет» и сформирована организационно-управленческая структура.
                    </p>

                    <h2 className=' font-semibold lg:text-lg text-base mb-6'>Актив Студенческого штаба Зимней универсиады:</h2>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-12 sm:gap-8 gap-12'>
                        {headquarters.map((headquarter, index) => {
                            return (
                                <div key={index} className='text-center'>
                                    <div className='font-semibold lg:text-base text-sm'>
                                        <ImageComponent 
                                            src={headquarter.image}
                                            alt="Фото"
                                            fill={false}
                                            width={80}
                                            height={80}
                                            className='mx-auto aspect-square object-cover rounded-2xl mb-2'
                                        />
                                        {headquarter.fio}
                                    </div>
                                    <h2 className='font-medium lg:text-sm text-xs text-primary-foreground mt-1'>{headquarter.post}</h2>
                                    <h3 className='text-xs mt-1'>{headquarter.sfuPost}</h3>
                                </div>
                            )}
                        )}
                    </div>
            </div>
        </div>
    )
}
