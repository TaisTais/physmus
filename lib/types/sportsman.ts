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
    info: z.string().nullable(),
    additional_info: z.string().nullable(),
    sports: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          title: z.string(),
          category:  z.object({
            data: z.object({
              attributes: z.object({
                color: z.string().nullable(),
              })
            }).nullable()
          })
        })
      }).array()
    }),
    uni_sport: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          title: z.string()
        })
      }).nullable()
    }),
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