import { z } from "zod"

export const AboutUniversiadeT = z.object({
  title: z.string(),
  description: z.string().nullable(),
  figures: z.object({
    number: z.number(),
    object: z.string()
  }).array(),
  universiadeInfo: z.string().nullable(),
  chronology: z.string().nullable()
})
  
export type AboutUniversiadeT = z.infer<typeof AboutUniversiadeT> 

