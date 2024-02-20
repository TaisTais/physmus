"use client"
import React from 'react';
import Image from 'next/image';
import { NavigationMenuList, NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from './navigation-menu'

export default function Header() {

  return (
    <div className="bg-primary">
      <NavigationMenu>
        <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href='/' className={`${navigationMenuTriggerStyle()} px-0 py-0`} active>
                  <Image 
                    src="/logos/logo-ifksit-header.svg" 
                    alt='logo' 
                    width={40} 
                    height={40} 
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()} active>
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/universiade2019'className={navigationMenuTriggerStyle()} active>
                  Универсиада
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/sports'className={navigationMenuTriggerStyle()} active>
                  Виды спорта
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href='/gto'className={navigationMenuTriggerStyle()} active>
                  ГТО
                </NavigationMenuLink>
              </NavigationMenuItem>
        </NavigationMenuList>
     </NavigationMenu>
    </div>
  )
}
