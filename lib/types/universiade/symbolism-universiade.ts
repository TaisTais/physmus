import { z } from "zod"
import { ImageT, UniTextBlockT } from "../main"

export const SymbolismUniversiadeT = z.object ({
  title: z.string(),
  items: z.object({
    title: z.string().nullable(),
    image: ImageT,
  }).array(),
  brandbook: z.lazy(() => UniTextBlockT),
  mascot: z.lazy(() => UniTextBlockT),
})
  
export type SymbolismUniversiadeT = z.infer<typeof SymbolismUniversiadeT>