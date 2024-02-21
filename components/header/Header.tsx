"use client"
import React from 'react';
import Image from 'next/image';
import { NavigationMenuList, NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from './navigation-menu'

export default function Header() {

  return (
    <div className="bg-primary">
      <NavigationMenu className=''>
        <NavigationMenuList className='flex-1 flex-row items-stretch'>
          <div>
                <NavigationMenuLink href='/' className={`${navigationMenuTriggerStyle()} px-0 py-0`} active>
                  <Image 
                    src={"/logos/logo-ifksit-header.svg"}
                    alt='logo' 
                    width={35} 
                    height={25} 
                  />
                </NavigationMenuLink>
            </div>
            <div className='flex flex-row gap-x-12'>
                <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()} active>
                  Главная
                </NavigationMenuLink>
                <NavigationMenuLink href='/universiade2019'className={navigationMenuTriggerStyle()} active>
                  Универсиада
                </NavigationMenuLink>
                <NavigationMenuLink href='/sports'className={navigationMenuTriggerStyle()} active>
                  Виды спорта
                </NavigationMenuLink>
                <NavigationMenuLink href='/gto'className={navigationMenuTriggerStyle()} active>
                  ГТО
                </NavigationMenuLink>
            </div>
        </NavigationMenuList>
     </NavigationMenu>
    </div>
  )
}
