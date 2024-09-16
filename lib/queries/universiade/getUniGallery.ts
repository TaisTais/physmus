import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { UniGalleryT } from "@/lib/types/universiade/gallery";

export const getUniGallery = async (): Promise<UniGalleryT> => {
  const query = /* GraphGL */ `
  query GetUniGallery {
    uniGalery {
      data {
        attributes {
          title
          imageBlocks {
            title
            images {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          videoBlocks {
            title
            videos {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      uniGalery: {
        data: {
          attributes: UniGalleryT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade Galery"',
  })
  
  if (json.data.uniGalery.data === null) {
    notFound()
  }
  
  const data = UniGalleryT.parse(json.data.uniGalery.data.attributes);

  return data;
};