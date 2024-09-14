import { z } from "zod"

export const MedalsUniversiadeT = z.object({
  title: z.string(),
  countries: z.object({
    country: z.string(),
    gold: z.number(),
    silver: z.number(),
    bronze: z.number(),
  }).array(),
  countriesWithSports: z.object({
    sport: z.string(),
    countries: z.object({
      country: z.string(),
      gold: z.number(),
      silver: z.number(),
      bronze: z.number(),
    }).array()
  }).array()
})

export type MedalsUniversiadeT = z.infer<typeof MedalsUniversiadeT>