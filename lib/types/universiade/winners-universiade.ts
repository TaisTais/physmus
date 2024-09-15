import { z } from "zod"

export const WinnersUniversiadeT = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  figures: z.object({
    number: z.number(),
    object: z.string()
  }).array(),
  text: z.string().nullable(),
  winners: z.object({
    fio: z.string(),
    sports: z.object({
      title: z.string()
    }),
    info: z.string(),
    uni_sport: z.object({
      title: z.string()
    })
  }).array(),
  participants: z.object({
    fio: z.string(),
    sports: z.object({
      title: z.string()
    }),
    info: z.string(),
    uni_sport: z.object({
      title: z.string()
    })
  }).array()
})
export type WinnersUniversiadeT = z.infer<typeof WinnersUniversiadeT> 