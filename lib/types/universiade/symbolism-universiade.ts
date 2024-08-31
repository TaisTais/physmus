import { z } from "zod"
import { ImageT, TextBlockT } from "../main"

export const SymbolismUniversiadeT = z.object ({
  title: z.string(),
  items: z.object({
    title: z.string().nullable(),
    image: ImageT,
  }).array(),
  brandbook: z.lazy(() => TextBlockT),
  mascot: z.lazy(() => TextBlockT),
})
  
export type SymbolismUniversiadeT = z.infer<typeof SymbolismUniversiadeT>