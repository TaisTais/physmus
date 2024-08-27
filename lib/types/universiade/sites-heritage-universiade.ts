import { z } from "zod"

export const SitesHeritageUniversiadeT = z.object ({
  culture: z.object({
    title: z.string(),
    text: z.string().nullable(),
    address: z.string()
  }).array(),
  housing: z.object({
    title: z.string(),
    text: z.string().nullable(),
    address: z.string()
  }).array(),
  sportComplex: z.object({
    complex: z.string(),
    sport: z.string()
  }).array()
})
  
export type SitesHeritageUniversiadeT = z.infer<typeof SitesHeritageUniversiadeT>