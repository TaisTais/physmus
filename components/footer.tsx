"use client"
import React from 'react';
import Image from 'next/image';

export function Footer() {
  return (
    <div className='bg-primary'>
      <div className='w-4/5 container pt-12 pb-20 flex flex-row items-center justify-between'>
        <div className='flex flex-row gap-10 justify-center items-center w-1/2'>
          <Image 
            src='/logos/logo-sfu-footer.svg' 
            alt='logo' 
            width={200}
            height={100}
          />
          <h3 className='text-sm font-semibold text-primary-foreground'>Институт физической культуры, спорта и туризма</h3>
        </div>
        <div className='text-sm text-right text-primary-foreground w-2/6'>
          <p>Российская Федерация, 109028, Красноярский край, г.Красноярск, Свободный проспект, д.82, стр.А</p>
        </div>
      </div>
    </div>
  )
}