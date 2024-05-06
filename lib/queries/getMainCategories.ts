import { MainCategoriesT } from "../types/main-categories"
import fetchData from "./fetchData"

export async function getMainCategories(): Promise<MainCategoriesT> {
  const query = /* GraphGL */ `
    query GetMainCategories {
      mainCategory {
        data {
          attributes {
            universiade {
              title
              description
              image {
                data { attributes { url } }
              }
            }
            sports {
              title
              description
              image {
                data { attributes { url } }
              }
            }
            gto {
              title
              description
              image {
                data { attributes { url } }
              }
            }
          }
        }
      
    }
  `

  const json = await fetchData<{
    data: {
      mainCategory: {
        data: {
          attributes: MainCategoriesT
        }
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Main Categories"',
  })
  
  const data = MainCategoriesT.parse(json.data.mainCategory.data.attributes);
  return data
}