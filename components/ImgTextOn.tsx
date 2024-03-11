import React from "react";
import Link from "next/link";

import ImageComponent from "./ImageComponent";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  url: string;
  src: string | undefined;
  target?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImgTextOn(props: Props) {
  return (
    <Link
      href={props.url}
      target={props.target}
      className={cn(
        "bg-background ring-ring ring-offset-background flex min-h-full w-full overflow-hidden rounded-xl transition-all duration-200 hover:-translate-y-2 hover:scale-[1.03] hover:ring-4 hover:ring-offset-2",
        props.className,
      )}
    >
      <div className="relative flex w-full">
        <ImageComponent
          src={props.src}
          fill={false}
          width={props.width ? props.width : 400}
          height={props.height ? props.height : 400}
          className={"w-full object-cover"}
          alt={props.title}
        />
        <div className="absolute bottom-0 h-full w-full bg-black bg-opacity-10" />
        <h2 className="absolute bottom-0 z-10 mb-2 ml-2 w-[85%] p-1 text-base font-bold text-white md:text-xs lg:mb-4 lg:ml-4 lg:p-4 lg:text-base xl:text-xl 2xl:mb-4 2xl:ml-4 drop-shadow">
          {props.title}
        </h2>
      </div>
    </Link>
  );
}
