"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border-primary ring-offset-background hover:ring-ring flex h-8 w-full items-center rounded-md border-2 px-2 py-1 text-sm hover:ring-2 hover:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        {children}
        <input
          type="search"
          className="placeholder:text-primary-foreground placeholder:text-xs ml-1 flex h-full w-full rounded-md bg-transparent p-3 text-sm outline-none disabled:cursor-not-allowed"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
InputSearch.displayName = "InputWithIcon";

export { InputSearch };