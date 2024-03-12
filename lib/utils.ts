import {  clsx } from "clsx"
import type {ClassValue} from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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
    "--accent-sfu",
    "--light-sky",
    "--light-pink",
    "--light-green"
  ]

  const className = colors[getIndex(index)]

  return className
}