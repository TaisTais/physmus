"use client"
import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <div className='bg-primary'>
      <div className='container pt-12 pb-20 flex flex-row items-center'>
        <div className='flex flex-col gap-5 justify-start text'>
          <Image 
            src='/logos/logo-sfu-footer.svg' 
            alt='logo' 
            width={300}
            height={100}
          />
          <h3 className='text-2xl font-semibold text-primary-foreground'>Институт физической культуры, спорта и туризма</h3>
        </div>

        <div className='flex flex-row gap-32 justify-end text text-primary-foreground '>
          <div className='text-center leading-9 font-medium'>
            <p>Универсиада</p>
            <p>Виды спорта</p>
            <p>ГТО</p>
          </div>
          <div className='text-right w-2/5 leading-9 font-medium'>
            <p>Российская Федерация, 109028, Красноярский край, г.Красноярск, Свободный проспект, д.82, стр.А</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}