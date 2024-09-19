import { z } from "zod"
import { ImagesArrayT, ImageT } from "../main"

export const StudentHeadquartersT = z.object({
  title: z.string().nullable(),
  text: z.string().nullable(),
  documents: ImagesArrayT,
  headquarters: z.object({
    title: z.string().nullable(),
    members: z.object({
      image: ImageT,
      post: z.string().nullable(),
      name: z.string().nullable(),
      sfuPost: z.string().nullable()
    }).array()
  })
})
  
export type StudentHeadquartersT = z.infer<typeof StudentHeadquartersT> 

