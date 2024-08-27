"use client";

import "keen-slider/keen-slider.min.css";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhotoModal from "./PhotoModal";
import ImageComponent from "./ImageComponent";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export default function PhotoSlider({
  data,
}: {
  data: {
    src: string;
    alt: string;
  }[];
}) {
  const [created, setCreated] = React.useState<boolean>();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    initial: 0,
    slides: {
      origin: "center",
      spacing:
        typeof window !== "undefined" && window.innerWidth <= 740 ? 3 : 6,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCreated(true);
    },
    destroyed() {
      setCreated(false);
    },
  });

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        className="keen-slider bg-primary aspect-square max-h-96 cursor-grab rounded-3xl md:aspect-video 2xl:aspect-[2/1.2] 2xl:max-h-[500px]"
      >
        {data.map((image, index) => (
          <div key={index} className="keen-slider__slide zoom-out__slide">
            {created ? (
              <PhotoSliderImg src={image.src} alt={image.alt} />
            ) : (
              <Skeleton className="h-full w-full" />
            )}
          </div>
        ))}
      </div>
      {created && !!instanceRef.current ? (
        <div className="mt-2 flex items-center gap-6">
          <div className="flex flex-auto gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  instanceRef.current?.moveToIdx(index);
                }}
                className="flex-auto py-4"
              >
                <div
                  className={cn(
                    "h-0.5 w-full transition-all",
                    currentSlide === index ? "bg-primary-foreground" : "bg-primary",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {data.length > 1 ? (
              <>
                <ArrowLeft
                  className="h-5 w-5 text-foreground cursor-pointer transition-all hover:scale-125"
                  onClick={() => instanceRef.current?.prev()}
                />
                <ArrowRight
                  className="h-5 w-5 text-foreground cursor-pointer transition-all hover:scale-125"
                  onClick={() => instanceRef.current?.next()}
                />
              </>
            ) : null}

            <PhotoModal data={data} />
          </div>
        </div>
      ) : (
        <Skeleton className="mb-3.5 mt-3 h-7 w-full" />
      )}
    </div>
  );
}

function PhotoSliderImg({
  alt,
  src,
  sizes = "(min-width: 768px) 40vw, 85vw",
}: {
  alt: string;
  src: string | undefined;
  sizes?: string;
}) {
  return (
    <ImageComponent
      src={src}
      fill
      sizes={sizes}
      className={cn("mx-auto", !!src ? "object-contain" : "object-cover")}
      alt={alt}
    />
  );
}