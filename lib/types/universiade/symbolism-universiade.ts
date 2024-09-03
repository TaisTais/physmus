import { z } from "zod"
import { UniTextBlockT } from "../main"

export const SymbolismUniversiadeT = z.object ({
  title: z.string(),
  items: z.object({
    title: z.string().nullable(),
    image: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string()
        })
      })
    }),
  }).array(),
  brandbook: z.lazy(() => UniTextBlockT),
  mascot: z.lazy(() => UniTextBlockT),
})
  
export type SymbolismUniversiadeT = z.infer<typeof SymbolismUniversiadeT>