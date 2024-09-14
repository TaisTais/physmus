import { z } from "zod"

export const WinnersUniversiadeT = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  figures: z.object({
    number: z.number(),
    object: z.string()
  }).array(),
  text: z.string().nullable(),
})
export type WinnersUniversiadeT = z.infer<typeof WinnersUniversiadeT> 