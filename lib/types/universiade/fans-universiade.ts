import { z } from "zod"

export const FansUniversiadeT = z.object({
  title: z.string().nullable(),
  amount: z.object({
    upperLine: z.string().nullable(),
    number: z.number(),
    lowerLine: z.string().nullable()
  }),
  description: z.string().nullable(),
  text: z.string().nullable()
})
export type FansUniversiadeT = z.infer<typeof FansUniversiadeT> 