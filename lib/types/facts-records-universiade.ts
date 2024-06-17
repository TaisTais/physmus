import { z } from "zod"
import { TextBlockT } from "./main"

export const FactsRecordsUniversiadeT = z.object({
  data: z.object({
    attributes: z.object({
      record: z.lazy(() => TextBlockT),
      fact: z.lazy(() => TextBlockT)
    })
  })
  
})
export type FactsRecordsUniversiadeT = z.infer<typeof FactsRecordsUniversiadeT> 