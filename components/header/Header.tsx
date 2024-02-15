"use client"

import React from 'react'
import { NavigationMenuList, NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '../ui/navigation-menu'

export default function Header() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className=''>
          <NavigationMenuLink href='/about'className={navigationMenuTriggerStyle()} active>
            Item One
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
