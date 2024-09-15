import { z } from "zod"
import { ImageT } from "../main"

export const MainPageUniversiadeT = z.object({
  title: z.object({
    upperLine: z.string().nullable(),
    mainLine: z.string().nullable(),
    lowerLine: z.string().nullable()
  }),
  description: z.string().nullable(),
  image: ImageT,
  baner: ImageT
})
  
export type MainPageUniversiadeT = z.infer<typeof MainPageUniversiadeT> 

