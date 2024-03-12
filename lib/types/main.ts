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

export const MainDescriptionT = z.object({
  description: z.string(),
  icons: ImagesArrayT
})
export type MainDescriptionT = z.infer<typeof MainDescriptionT> 

export const AboutUniversiadeT = z.object({
  text: z.string(),
})
export type AboutUniversiadeT = z.infer<typeof AboutUniversiadeT> 

export const FactsRecordsUniversiadeT = z.object({
  text: z.string(),
})
export type FactsRecordsUniversiadeT = z.infer<typeof FactsRecordsUniversiadeT> 

// ********************************* SPORTSMAN ********************************* //
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
          name: z.string()
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

// ********************************* SPORTS ********************************* //
export const SportCategoriesT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      name: z.string()
    })
  }).array()
})
export type SportCategoriesT = z.infer<typeof SportCategoriesT> 

export const SportT = z.object({
  id: z.string(),
  attributes: z.object({
    name: z.string(),
    category: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          name: z.string()
        })
      }).nullable()
    }),
    images: ImagesArrayT,
    description: z.string().nullable()
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
      name: z.string()
    })
  }).array()
})
export type SportsT = z.infer<typeof SportsT> 