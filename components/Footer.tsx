"use client"
import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <div className='bg-primary'>
      <div className='w-4/5 container py-12 flex lg:flex-row flex-col items-center justify-between gap-6'>
        <div className='flex flex-col gap-6 lg:w-1/3 lg:items-start items-center'>
          <Image 
            src='/logos/logo-sfu-footer.svg' 
            alt='logo' 
            width={200}
            height={100}
          />
          <h3 className='text-sm font-semibold text-primary-foreground'>Институт физической культуры, спорта и туризма</h3>
        </div>
        <div className='text-sm lg:text-right text-center text-primary-foreground w-2/6'>
          <p>Российская Федерация, 109028, Красноярский край, г.Красноярск, Свободный проспект, д.82, стр.А</p>
        </div>
      </div>
    </div>
  )
}