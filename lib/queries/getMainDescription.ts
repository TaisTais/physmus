import { MainDescriptionT } from "../types/main"
import fetchData from "./fetchData"

export async function getMainDescription(): Promise<MainDescriptionT> {
  const query = /* GraphGL */ `
  query GetMainDesc {
    mainDescription {
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
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      mainDescription: {
        data: {
          attributes: MainDescriptionT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Main Description"',
  })
  
  const data = MainDescriptionT.parse(json.data.mainDescription.data?.attributes);
  return data
}