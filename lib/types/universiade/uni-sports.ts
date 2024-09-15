import { z } from "zod"
import { ImagesArrayT } from "../main"

export const UniSportCategoriesT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string(),
      color: z.string().nullable(),
      sports: z.object({
        data: z.object({
          id: z.string(),
          attributes: z.object({
            title: z.string()
          })
        }).array()
      })
    })
  }).array()
})
export type UniSportCategoriesT = z.infer<typeof UniSportCategoriesT> 

export const UniSportT = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    category: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          title: z.string()
        })
      }).nullable()
    }),
    images: ImagesArrayT,
    description: z.string().nullable(),
    
  })
})
export type UniSportT = z.infer<typeof UniSportT> 

export const UniSportsT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      title: z.string()
    })
  }).array()
})
export type UniSportsT = z.infer<typeof UniSportsT> 