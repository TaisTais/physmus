import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

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
    className={cn("flex flex-col space-y-1 pt-8 px-10 pb-6", className)}
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
    className={cn("text category-header text-[#FFF] leading-none tracking-tight", className)}
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

const heroCardTriggerStyle = cva(
  "flex flex-col gap-10 data-[active]:bg-hover data-[state=open]:bg-hover"
)

export {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  heroCardTriggerStyle,
}
