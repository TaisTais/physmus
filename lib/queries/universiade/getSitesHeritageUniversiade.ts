import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { SitesHeritageUniversiadeT } from "@/lib/types/universiade/sites-heritage-universiade";


export const getSitesHeritageUniversiade = async (): Promise<SitesHeritageUniversiadeT> => {
  const query = /* GraphGL */ `
  query SiteAndHeritageUniversiade {
    siteAndHeritageUniversiade {
      data {
        attributes {
          culture {
            title
            text
            address
          }
          housing {
            title
            text
            address
          }
          sportComplex {
            complex
            sport
          }
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      siteAndHeritageUniversiade: {
        data: {
          attributes: SitesHeritageUniversiadeT
        } | null
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Universiade Symbolysm"',
  })
  
  if (json.data.siteAndHeritageUniversiade.data === null) {
    notFound()
  }

  const data = SitesHeritageUniversiadeT.parse(json.data.siteAndHeritageUniversiade.data.attributes);
  return data;
}