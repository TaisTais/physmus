import { z } from "zod"

export const WinnersUniversiadeT = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  figures: z.object({
    number: z.number(),
    object: z.string()
  }).array(),
  text: z.string().nullable(),
  winnersTable: z.object({
    title: z.string(),
    people: z.object({
      name: z.string(),
      status: z.string(),
      sport: z.string(),
      achievements: z.string(),
    }).array()
  }),
  participantsTable: z.object({
    title: z.string(),
    people: z.object({
      name: z.string(),
      status: z.string(),
      sport: z.string(),
      achievements: z.string(),
    }).array()
  }),
})
export type WinnersUniversiadeT = z.infer<typeof WinnersUniversiadeT> 