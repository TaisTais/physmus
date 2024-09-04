import { z } from "zod"

export const GeographyOfParticipantsT = z.object({
  title: z.string(),
  info: z.object({
    text: z.string(),
    countries: z.object({
      name: z.string()
    }).array(),
    additionalText: z.string()
  })
})

export type GeographyOfParticipantsT = z.infer<typeof GeographyOfParticipantsT>