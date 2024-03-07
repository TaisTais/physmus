import { z } from "zod"

export const ImageT = z.object({
  data: z.object({
    attributes: z.object({
      url: z.string()
    })
  }).nullable()
})
export type ImageT = z.infer<typeof ImageT> 

export const MainCategoriesT = z.object({
  universiade: z.object({
    title: z.string(),
    image: ImageT,
    description: z.string().nullable()
  }),
  sports: z.object({
    title: z.string(),
    image: ImageT,
    description: z.string().nullable()
  }),
  gto: z.object({
    title: z.string(),
    image: ImageT,
    description: z.string().nullable()
  })
})
export type MainCategoriesT = z.infer<typeof MainCategoriesT> 