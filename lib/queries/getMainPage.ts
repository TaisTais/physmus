import { MainPageT } from "../types/main-page"
import fetchData from "./fetchData"

export async function getMainPage(): Promise<MainPageT> {
  const query = /* GraphGL */ `
  query GetMainPage {
    mainPage {
      data {
        attributes {
          title
          description
          icons {
            data {
              attributes {
                url
              }
            }
          }
          mainImages {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            title
            link
            description
            image {
              data { attributes { url } }
            }
          }
          text
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      mainPage: {
        data: {
          attributes: MainPageT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Main Page"',
  })
  
  const data = MainPageT.parse(json.data.mainPage.data?.attributes);
  
  return data
}