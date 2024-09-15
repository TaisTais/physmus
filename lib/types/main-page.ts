import { z } from "zod"
import { ImageT, ImagesArrayT } from "./main"

export const MainPageT = z.object({
  title: z.string(),
  description: z.string().nullable(),
  icons: z.lazy(() => ImagesArrayT),
  mainImages: z.lazy(() => ImagesArrayT),
  categories: z.object({
    title: z.string(),
    link: z.string(),
    image: z.lazy(() => ImageT),
    description: z.string().nullable(),
  }).array(),
  text: z.any()
})
export type MainPageT = z.infer<typeof MainPageT> 