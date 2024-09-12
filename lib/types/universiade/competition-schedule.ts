import { z } from "zod"

export const CompetitionScheduleT = z.object({
  title: z.string(),
  competitions: z.object({
    title: z.string(),
    date: z.string(),
    address: z.string()
  }).array()
})

export type CompetitionScheduleT = z.infer<typeof CompetitionScheduleT>