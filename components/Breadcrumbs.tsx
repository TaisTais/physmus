"use client"

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { cn, uniqArray } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function Breadcrumbs({
    data,
    className
}: {
    data?: {
        slug: string,
        title: string,
    }[],
    className?: string
}) {

    const pathname = usePathname()

    const pathArray = pathname.split("/")

    const breadcrumbs = pathArray.map((path, index) => {

        const sameSlug = data?.find(item => item.slug === path);

        const pathBefore = pathArray.slice(0, index+1)

        if (sameSlug) {
            return {
                title: sameSlug.title,
                href: pathBefore.join("/"),
            }
        } else {
            switch (path) {
                case '':
                    return {
                        title: "Главная",
                        href: '/',
                    }
                default:
                    return {
                        title: path,
                        href: "/" + path,
                    }
            }
        }
    })

    const uniqBreadcrumbs = uniqArray(breadcrumbs)

    return (
        <Breadcrumb className={cn("my-6", className)}>
            <BreadcrumbList>
                {uniqBreadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={index}>
                        {index !== uniqBreadcrumbs.length - 1
                            ?
                            <>
                                <BreadcrumbLink asChild>
                                    <Link href={crumb.href} className=' text-primary-foreground'>
                                        {crumb.title}
                                    </Link>
                                </BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </> 
                            :  // last element
                            <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                        }
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
