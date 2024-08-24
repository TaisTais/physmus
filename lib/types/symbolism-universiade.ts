import { z } from "zod"
import { TextBlockT } from "./main"

export const SymbolismUniversiadeT = z.object ({
  title: z.string(),
  symbols: z.object({
    data: z.object({
      attributes: z.object({
        url: z.string(),
        alternativeText: z.string()
      })
    }).array()
  }),
  brandbook: z.lazy(() => TextBlockT),
  mascot: z.lazy(() => TextBlockT),
})
  
export type SymbolismUniversiadeT = z.infer<typeof SymbolismUniversiadeT>