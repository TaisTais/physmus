import { z } from "zod"
import { TextBlockT } from "./main"

export const SitesHeritageUniversiadeT = z.object ({
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
  
export type SitesHeritageUniversiadeT = z.infer<typeof SitesHeritageUniversiadeT>