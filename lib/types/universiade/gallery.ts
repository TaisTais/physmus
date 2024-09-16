import { z } from "zod"

export const UniGalleryT = z.object({
  title: z.string(),
  imageBlocks: z.object({
    title: z.string(),
    images: z.object({
        data: z.object({
            attributes: z.object({
                url: z.string(),
                alternativeText: z.string().nullable()
            })
        }).array()
    })
  }).array(),
  videoBlocks: z.object({
    title: z.string(),
    videos: z.object({
        data: z.object({
            attributes: z.object({
                url: z.string(),
                alternativeText: z.string().nullable()
            })
        }).array()
    })
  }).array(),
})
export type UniGalleryT = z.infer<typeof UniGalleryT> 