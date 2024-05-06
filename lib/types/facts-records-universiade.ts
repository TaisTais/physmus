import { z } from "zod"

export const FactsRecordsUniversiadeT = z.object({
  text: z.string(),
})
export type FactsRecordsUniversiadeT = z.infer<typeof FactsRecordsUniversiadeT> 