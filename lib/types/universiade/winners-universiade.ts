import { z } from "zod"
import { SportsmanT } from "../sportsman"

export const WinnersUniversiadeT = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  figures: z.object({
    number: z.number(),
    object: z.string()
  }).array(),
  text: z.string().nullable(),
  winners: z.object({
    data: SportsmanT.array()
  }),
  participants: z.object({
    data: SportsmanT.array()
  })
})
export type WinnersUniversiadeT = z.infer<typeof WinnersUniversiadeT> 