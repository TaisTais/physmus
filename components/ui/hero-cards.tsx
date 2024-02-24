import * as React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border text-card-foreground shadow h-32",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pt-8 px-10 pb-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text category-header leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text text-background", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"


const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pb-10 pl-9", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"


export function HeroCards() {
  return (
    <div className="flex flex-col gap-5 mb-32">
      <Link href='/universiade2019'>
        <Card className="hero-card bg-universiade-card">
          <CardHeader>
            <CardTitle>Зимняя универсиада 2019</CardTitle>
            <CardDescription>XXIX Всемирная зимняя Универсиада в СФУ</CardDescription>
          </CardHeader>
          <CardFooter>
          </CardFooter>
        </Card>
      </Link>

      <Link href='/sports'>
        <Card className="hero-card bg-sports-card">
        <CardHeader>
          <CardTitle>Виды спорта</CardTitle>
          <CardDescription>Базовые виды спорта, реализуемые в СФУ</CardDescription>
        </CardHeader>
        <CardFooter>
        </CardFooter>
        </Card>
      </Link>

      <Link href='/gto'>
        <Card className="hero-card bg-gto-card">
        <CardHeader>
          <CardTitle className="">ГТО</CardTitle>
          <CardDescription>Участие университета в спортивной жизни студентов.</CardDescription>
        </CardHeader>
        <CardFooter>
        </CardFooter>
        </Card>
      </Link>
    </div>
    

  )
}
