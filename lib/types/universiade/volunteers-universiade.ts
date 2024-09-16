import { z } from "zod"

export const VolunteersUniversiadeT = z.object({
  title: z.string().nullable(),
  amount: z.object({
    upperLine: z.string().nullable(),
    number: z.number(),
    lowerLine: z.string().nullable()
  }),
  description: z.string().nullable(),
  text: z.string().nullable(),
  documents: z.object({
    data: z.object({
      attributes: z.object({
        url: z.string(),
        alt: z.string().nullable()
      })
    }).array()
  })
})
export type VolunteersUniversiadeT = z.infer<typeof VolunteersUniversiadeT> 