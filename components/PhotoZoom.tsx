"use client";

import React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ImageComponent from "./ImageComponent";
import { cn } from "@/lib/utils";

export default function PhotoZoom({
  alt,
  src,
}: {
  alt: string;
  src: string | undefined;
}) {
  const [loading, setLoading] = React.useState(true);

  return (
    <Dialog>
      <DialogTrigger className="max-h-fit w-full">
        <ImageComponent
          src={src}
          fill={false}
          width={600}
          height={600}
          className={cn(
            "mx-auto max-h-[70vh] overflow-hidden rounded-md object-contain",
            loading ? "" : "h-auto w-auto",
          )}
          alt={alt}
          priority={true}
          onLoad={() => setLoading(false)}
        />
      </DialogTrigger>
      <DialogContent className="bg-primary h-[80vh] max-w-[95vw] overflow-hidden p-0 sm:max-w-[95vw] !rounded-3xl">
        <TransformWrapper>
          <TransformComponent
            contentStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              width: "95vw",
            }}
          >
            <div className="relative h-full w-full">
              <ImageComponent
                src={src}
                fill
                sizes={`100vw`}
                quality={100}
                className="object-contain"
                alt={alt}
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </DialogContent>
    </Dialog>
  );
}
