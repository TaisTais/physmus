import { z } from "zod"

export const SitesHeritageUniversiadeT = z.object ({
  culture: z.object({
    title: z.string(),
    objects: z.object({
      title: z.string(),
      address: z.string(),
      text: z.string()
    }).array()
  }),
  housing: z.object({
    title: z.string(),
    objects: z.object({
      title: z.string(),
      address: z.string(),
      text: z.string()
    }).array()
  }),
  sport: z.object({
    title: z.string(),
    sportComplex: z.object({
      complex: z.string(),
      sport: z.string()
    }).array()
  })
})
  
export type SitesHeritageUniversiadeT = z.infer<typeof SitesHeritageUniversiadeT>
