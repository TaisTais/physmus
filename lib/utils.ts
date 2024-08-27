import {  clsx } from "clsx"
import type {ClassValue} from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[]
}

export function getShortDescription(
  description: string,
  length?: number,
) {
  const array = description.split(" ");

  const sliceLength = length ? length : 30;

  if (array.length >= sliceLength + 1) {
    return array.slice(0, sliceLength).join(" ") + "...";
  } else return array.join(" ");
}

export function uniqArray<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

export function getIndex(num: number) {
  if (num < 10) return num

  const digits = num.toString().split('');

  const last = digits[digits.length - 1]

  return Number(last)
}

export function getColor(index: number) {

  const colors = [
    "--accent-sky",
    "--accent-pink",
    "--accent-blue",
    "--accent-green",
    "--accent-yellow",
    "--accent-lime",
    "--accent-orange",
    "--light-sky",
    "--light-pink",
    "--light-green"
  ]

  const className = colors[getIndex(index)]

  return className
}