"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2, Search, X } from "lucide-react";
import { InputSearch } from "./ui/input-search";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function SearchField({ 
    placeholder,
    className
}: { 
    placeholder: string,
    className?: string
}) {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [debouncedValue, setDebouncedValue] = React.useState<string>("");
  const [mounted, setMounted] = React.useState<boolean>(false);

  const [focus, setFocus] = React.useState<boolean>(false);

  const inputRef = React.createRef<HTMLInputElement>();

  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = React.useTransition();

  const handleSearchParams = React.useCallback(
    (inputValue: string) => {
      const params = new URLSearchParams(window.location.search);

      // reset pagination(page) to prevent zero results
      if (params.has("page")) params.set("page", "1");

      if (inputValue.length > 0) {
        params.set("search", inputValue);
      } else {
        params.delete("search");
      }

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [pathname, router],
  );

  // Set Focus
  if (inputValue.length > 0) inputRef.current?.focus();

  // EFFECT: Set Initial Params
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search") ?? "";
    setInputValue(searchQuery);
  }, []);

  // EFFECT: Set Mounted
  React.useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true);
    }
  }, [debouncedValue, mounted]);

  // EFFECT: Debounce Input Value
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // EFFECT: Search Params
  React.useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue);
  }, [debouncedValue, handleSearchParams, mounted]);

  return (
    <div className={cn(
        className,
        "relative"
    )}>
      <InputSearch
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        className={cn(
            "rounded-full",
            focus ? "ring-ring w-full ring-2 ring-offset-2" : "w-full"
        )}
      >
        <Search className="h-4 w-4 text-primary-foreground" />
      </InputSearch>

      {isPending ? (
        <div className="absolute right-2 top-2">
          <Loader2 className="w-4 h-4 animate-spin text-primary-foreground" />
        </div>
      ) : null}

      {(inputValue.length > 0) && !isPending ? (
        <Button
          variant="ghost"
          className="absolute right-2 top-2 h-fit w-fit p-0"
          onClick={() => {
            setDebouncedValue("");
            setInputValue("");
          }}
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </Button>
      ) : null}
    </div>
  );
}
