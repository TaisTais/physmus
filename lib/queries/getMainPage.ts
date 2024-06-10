import { MainPageT } from "../types/main-page"
import fetchData from "./fetchData"

export async function getMainPage(): Promise<MainPageT> {
  const query = /* GraphGL */ `
  query GetMainPage {
    mainPage {
      data {
        attributes {
          description
          icons {
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
          about {
            title
            text
            images {
              data { attributes { url } }
            }
          }
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