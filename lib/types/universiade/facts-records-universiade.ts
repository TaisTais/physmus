import { z } from "zod"
import { ImageT } from "../main"

export const FactsRecordsUniversiadeT = z.object({
  title: z.string().nullable(),
  records: z.object({
    image: ImageT,
    title: z.string().nullable(),
    text: z.string().nullable()
  }).array()
})

export type FactsRecordsUniversiadeT = z.infer<typeof FactsRecordsUniversiadeT> 