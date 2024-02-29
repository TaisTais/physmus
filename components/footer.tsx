"use client"
import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <div className='bg-primary'>
      <div className='container pt-12 pb-20 flex flex-row items-center'>
        <div className='flex flex-col gap-5 justify-start w-1/2'>
          <Image 
            src='/logos/logo-sfu-footer.svg' 
            alt='logo' 
            width={200}
            height={100}
          />
          <h3 className='text-base font-semibold text-primary-foreground'>Институт физической культуры, спорта и туризма</h3>
        </div>

        <div className='flex flex-row gap-32 justify-end text-primary-foreground '>
          <div className='font-semibold text-center'>
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