"use client"

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { NavigationMenuList, NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {

  const [shadow, setShadow] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  const stickyHeader = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])


  useLayoutEffect(() => {
    const fixedHeader = () => {
      if (scrollPosition > 22) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', fixedHeader)

    return () => {
      window.removeEventListener('scroll', fixedHeader);
    };
  }, [scrollPosition])

  return (
    <div 
      ref={stickyHeader} 
      className={cn(
        "bg-primary py-2 fixed w-full z-[1000] shadow transition-all duration-300",
        shadow ? "shadow-black/10" : " shadow-transparent"
      )}
    >
      <div className='container w-4/5 flex justify-between items-center gap-12'>
        <Link 
          href='/' 
          className="rounded-full py-0 hover:bg-hover text-primary-foreground transition-all"
        >
          <Image 
            src={"/logos/logo-ifksit-header-small.svg"}
            alt='Logo' 
            width={40} 
            height={20}
          />
        </Link>

        {/* Desktop */}
        <NavigationMenu className='w-full justify-end hidden lg:flex'>
          <NavigationMenuList className='flex flex-row xl:gap-x-12 gap-x-3 flex-wrap'>
            <NavMenuItem name='Главная' href='/' />
            <NavMenuItem name='Универсиада' href='/universiade2019' />
            <NavMenuItem name='Виды спорта' href='/sports' />
            <NavMenuItem name='ГТО' href='/gto' />
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className='lg:hidden block'>
            <Menu className="h-[2.5rem] w-[2.5rem] text-primary-foreground transition-all" />
          </SheetTrigger>
          <SheetContent className='mt-14'>
            <NavigationMenu className='w-full mt-12'>
              <NavigationMenuList className='w-full flex flex-col gap-y-8'>
                <NavMenuItem name='Главная' href='/' />
                <NavMenuItem name='Универсиада' href='/universiade2019' />
                <NavMenuItem name='Виды спорта' href='/sports' />
                <NavMenuItem name='ГТО' href='/gto' />
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
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
  
  const pathName = usePathname();
  
  // Remove query parameters
  const pathWithoutQuery = pathName.split("?")[0];

  // Ex:"/my/nested/path" --> ["my", "nested", "path"]
  const pathNestedRoutes = pathWithoutQuery
    .split("/")
    .filter((v) => v.length > 0);

  const isMainPage = pathNestedRoutes[pathNestedRoutes.length  - 1] === undefined
  const pathCurrentPage = isMainPage ? "/" : "/" + pathNestedRoutes[0];

  return (
    <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()} active={pathCurrentPage === href}>
      {name}
    </NavigationMenuLink>
  )

}
