import { z } from "zod"
import { ImageT } from "./main";

export const GtoT = z.object({
  text: z.string().nullable(),
  links: z.object({
    title: z.string(),
    link: z.string()
  }).array()
});

export type GtoT = z.infer<typeof GtoT> 

export const GtoHistoryT = z.object({
  text: z.string().nullable(),
});
export type GtoHistoryT = z.infer<typeof GtoHistoryT>;

export const GtoSignsT = z.object({
    text: z.string().nullable(),
    items: z.object({
        title: z.string().nullable(),
        image: ImageT
    }).array()
});
export type GtoSignsT = z.infer<typeof GtoSignsT>;

export const GtoDocsT = z.object({
    text: z.string().nullable(),
    items: z.object({
        title: z.string().nullable(),
        file: ImageT
    }).array()
});
export type GtoDocsT = z.infer<typeof GtoDocsT>;

export const GtoNormsT = z.object({
    text: z.string().nullable(),
    items: z.object({
        title: z.string().nullable(),
        file: ImageT
    }).array()
});
export type GtoNormsT = z.infer<typeof GtoNormsT>;
