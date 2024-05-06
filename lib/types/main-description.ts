import { z } from "zod"
import { ImagesArrayT } from "./main"

export const MainDescriptionT = z.object({
  description: z.string(),
  icons: ImagesArrayT
})
export type MainDescriptionT = z.infer<typeof MainDescriptionT> 