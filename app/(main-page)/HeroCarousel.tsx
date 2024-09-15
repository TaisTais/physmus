"use client"

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';


export default function HeroCarousel({
    data
}: {
    data: {
        attributes: {
            url: string;
        };
    }[] 
}) {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false
              }),
            ]}
        >
            <CarouselContent>
                {data.map((img, indx) => (
                    <CarouselItem key={indx}>
                        <Image 
                            src={img.attributes.url} 
                            alt=''
                            width={1000}
                            height={1000}
                            className="object-contain w-full py-0 my-0 rounded-3xl"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
