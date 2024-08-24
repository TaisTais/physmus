import { notFound } from "next/navigation";
import { SitesHeritageUniversiadeT } from "../../types/sites-heritage-universiade"
import fetchData from "../fetchData"


export const getSitesHeritageUniversiade = async (): Promise<SitesHeritageUniversiadeT> => {
  const query = /* GraphGL */ `
  query AboutUniversiade {
    universiadaSimbolysm {
      data {
        attributes {
          title
          symbols {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          brandbook {
            title
            text
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
          mascot {
            title
            text
            images {
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
  }
  `
  const json = await fetchData<{
    data: {
      universiadaSimbolysm: {
        data: {
          attributes: SitesHeritageUniversiadeT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Universiade Symbolysm"',
  })
  
  if (json.data.universiadaSimbolysm.data === null) {
    notFound()
  }

  const data = SitesHeritageUniversiadeT.parse(json.data.universiadaSimbolysm.data.attributes);
  return data;
}