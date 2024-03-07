import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"




export default function Universiade2019() {
  return (
    <div className="  h-[1000px]">
      <div className="container pt-20">
        <div className="flex flex-row items-center">
          <div className="flex flex-col gap-10">
            <h1 className="text title text-primary-foreground ">XXIX Всемирная зимняя универсиада 2019 года</h1>
            <Button variant={'universiade'}>Подробнее</Button>
          </div>
        <Image src='/universiade-map.svg' alt='fsgd' width={800} height={1}/>
        </div>
        

      </div>
    </div>
  )
}