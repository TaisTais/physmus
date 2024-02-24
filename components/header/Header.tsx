"use client"
import React from 'react';
import Image from 'next/image';
import { NavigationMenuList, NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle, navigationMenuLOGOTriggerStyle } from './navigation-menu'

export default function Header() {

  return (
    <div className="bg-primary">
      <NavigationMenu className='container'>
        <NavigationMenuList className='flex items-center justify-between'>
          <div>
            <NavigationMenuLink href='/' className={`${navigationMenuLOGOTriggerStyle()} mr-[30vw]`} active>
              <Image 
                src={"/logos/logo-ifksit-header-small.svg"}
                alt='logo' 
                width={40} 
                height={15} 
              />
            </NavigationMenuLink>
          </div>
          <div className='flex flex-row gap-x-12 float-right'>
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
