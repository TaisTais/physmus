import { notFound } from "next/navigation";
import { AboutUniversiadeT } from "../../types/universiade/about-universiade"
import fetchData from "../fetchData"

export const getAboutUniversiade = async (): Promise<AboutUniversiadeT> => {
  const query = /* GraphGL */ `
  query AboutUniversiade {
    aboutUniversiade {
      data {
        attributes {
          title
          description
          figures {
            key
            value
          }
          universiadeInfo
          chronology
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      aboutUniversiade: {
        data: {
          attributes: AboutUniversiadeT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "About Universiade"',
  })
  
  if (json.data.aboutUniversiade.data === null) {
    notFound()
  }

  const data = AboutUniversiadeT.parse(json.data.aboutUniversiade.data.attributes);
  return data;
}