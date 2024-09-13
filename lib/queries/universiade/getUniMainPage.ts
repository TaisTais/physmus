import { notFound } from "next/navigation";
import { MainPageUniversiadeT } from "../../types/universiade/uni-main-page"
import fetchData from "../fetchData"

export const getUniMainPage = async (): Promise<MainPageUniversiadeT> => {
  const query = /* GraphGL */ `
  query UniMainPage{
    universiade {
      data {
        attributes {
          title {
            upperLine
            mainLine
            lowerLine
          }
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          baner {
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
      universiade: {
        data: {
          attributes: MainPageUniversiadeT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "About Universiade"',
  })
  
  if (json.data.universiade.data === null) {
    notFound()
  }

  const data = MainPageUniversiadeT.parse(json.data.universiade.data.attributes);
  return data;
}