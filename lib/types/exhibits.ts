import { z } from "zod"
import { ImagesArrayT, ImageT } from "./main"

export const ExhibitT = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    description: z.string().nullable(),
    text: z.string().nullable(),
    images: ImagesArrayT,
    pdfs: ImagesArrayT,
    model3d: ImageT,
  })
})
export type ExhibitT = z.infer<typeof ExhibitT> 

export const ExhibitsArrayT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: ExhibitT.array()
})
export type ExhibitsArrayT = z.infer<typeof ExhibitsArrayT> 