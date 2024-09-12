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
      url: z.string(),
    })
  }).array()
})
export type ImagesArrayT = z.infer<typeof ImagesArrayT>

export const TextBlockT = z.object({
  title: z.string().nullable(),
  text: z.string(),
  images: ImagesArrayT
})
export type TextBlockT = z.infer<typeof TextBlockT>

export const UniTextBlockT = z.object({
  title: z.string().nullable(),
  text: z.string(),
  image: z.object({
    data: z.object({
      attributes: z.object({
        url: z.string()
      })
    })
  })
})
export type UniTextBlockT = z.infer<typeof UniTextBlockT>
