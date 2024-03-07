import { z } from "zod"

export const ImageT = z.object({
  data: z.object({
    attributes: z.object({
      url: z.string()
    })
  }).nullable()
})
export type ImageT = z.infer<typeof ImageT> 


export const MainCategoryT = z.object({
  title: z.string(),
  description: z.string(),
  background: ImageT
})
export type MainCategoryT = z.infer<typeof MainCategoryT> 