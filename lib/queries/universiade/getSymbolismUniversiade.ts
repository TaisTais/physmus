import { notFound } from "next/navigation";
import { SymbolismUniversiadeT } from "../../types/universiade/symbolism-universiade"
import fetchData from "../fetchData"


export const getSymbolismUniversiade = async (): Promise<SymbolismUniversiadeT> => {
  const query = /* GraphGL */ `
  query SimbolysmUniversiade {
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
          attributes: SymbolismUniversiadeT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Universiade Symbolism"',
  })
  
  if (json.data.universiadaSimbolysm.data === null) {
    notFound()
  }

  const data = SymbolismUniversiadeT.parse(json.data.universiadaSimbolysm.data.attributes);
  return data;
}