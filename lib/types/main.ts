import { z } from "zod"

export const ImageT = z.object({
  data: z.object({
    attributes: z.object({
      url: z.string()
    })
  }).nullable()
})
export type ImageT = z.infer<typeof ImageT> 

export const ImagesArrayT = z.object({
  data: z.object({
    attributes: z.object({
      url: z.string()
    })
  }).array()
})
export type ImagesArrayT = z.infer<typeof ImagesArrayT>