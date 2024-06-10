import { z } from "zod"
import { ImagesArrayT } from "./main";

export const SportsmanUniversiadeEnum = z.enum(["Pobediteli_i_prizery", "Uchastniki"]);
export type SportsmanUniversiadeEnum = z.infer<typeof SportsmanUniversiadeEnum>;

export const SportsmanT = z.object({
  id: z.string(),
  attributes: z.object({
    fio: z.string(),
    rank: z.string().nullable(),
    images: ImagesArrayT,
    additional_info: z.string().nullable(),
    achievements: z.object({
      year: z.string().nullable(),
      description: z.string()
    }).array(),
    sport: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          title: z.string()
        })
      }).nullable()
    }),
    uni_sport: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          title: z.string()
        })
      }).nullable()
    }),
    variety_sport: z.string().nullable(),
    universiade2019: SportsmanUniversiadeEnum.nullable()
  })
})
export type SportsmanT = z.infer<typeof SportsmanT> 

export const SportsmansArrayT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: SportsmanT.array()
})
export type SportsmansArrayT = z.infer<typeof SportsmansArrayT> 