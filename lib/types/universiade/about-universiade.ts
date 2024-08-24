import { z } from "zod"

export const AboutUniversiadeT = z.object({
    title: z.string(),
    description: z.string().nullable(),
    figures: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string()
        })
      })
    }),
    universiadeInfo: z.string().nullable()
  })
  
export type AboutUniversiadeT = z.infer<typeof AboutUniversiadeT> 

