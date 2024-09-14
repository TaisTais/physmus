import { z } from "zod"
import { ImageT } from "../main"

export const FactsRecordsUniversiadeT = z.object({
  title: z.string().nullable(),
  facts: z.object({
    image: ImageT,
    title: z.string().nullable(),
    text: z.string().nullable()
  }).array(),
  records: z.object({
    image: ImageT,
    title: z.string().nullable(),
    text: z.string().nullable()
  }).array()
})

export type FactsRecordsUniversiadeT = z.infer<typeof FactsRecordsUniversiadeT> 