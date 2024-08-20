import { z } from "zod"
import { ImagesArrayT } from "./main"

export const SportCategoriesT = z.object({
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
      darkColor: z.string().nullable(),
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
export type SportCategoriesT = z.infer<typeof SportCategoriesT> 

export const SportT = z.object({
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
    historyImages: ImagesArrayT,
    description: z.string().nullable(),
    history: z.string().nullable(),
    timeline: z.object({
      title: z.string(),
      description: z.string()
    }).array()
  })
})
export type SportT = z.infer<typeof SportT> 

export const SportsT = z.object({
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
export type SportsT = z.infer<typeof SportsT> 