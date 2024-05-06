import { z } from "zod"

export const AboutUniversiadeT = z.object({
  text: z.string(),
})
export type AboutUniversiadeT = z.infer<typeof AboutUniversiadeT> 