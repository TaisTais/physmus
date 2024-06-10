import { z } from "zod"
import { ImageT, ImagesArrayT, TextBlockT } from "./main"

export const MainPageT = z.object({
  description: z.string(),
  icons: z.lazy(() => ImagesArrayT),
  categories: z.object({
    title: z.string(),
    link: z.string(),
    image: z.lazy(() => ImageT),
    description: z.string().nullable()
  }).array(),
  about: z.lazy(() => TextBlockT),
})
export type MainPageT = z.infer<typeof MainPageT> 