"use client"
import React from 'react';
import Image from 'next/image';
import { NavigationMenuList, NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle, navigationMenuLOGOTriggerStyle } from './ui/navigation-menu'
import { usePathname } from 'next/navigation';

export default function Header() {

  return (
    <div className="bg-primary">
      <NavigationMenu className='container w-4/5'>
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
            <NavMenuItem name='Главная' href='/' />
            <NavMenuItem name='Универсиада' href='/universiade2019' />
            <NavMenuItem name='Виды спорта' href='/sports' />
            <NavMenuItem name='ГТО' href='/gto' />
          </div>
        </NavigationMenuList>
     </NavigationMenu>
    </div>
  )
}

function NavMenuItem({
  name,
  href
}: {
  name: string,
  href: string
}) {

  const pathname = usePathname()

  return (
    <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()} active={pathname === href}>
      {name}
    </NavigationMenuLink>
  )

}
