import { MedalsUniversiadeT } from "@/lib/types/universiade/medals-universiade";
import fetchData from "../fetchData";
import { notFound } from "next/navigation";


export const getMedalsUniversiade = async (): Promise<MedalsUniversiadeT> => {
  const query = /* GraphQL */ `
  query MedalsUniversiade {
    universiadeMedal {
      data {
        attributes {
          title
          countries {
            country
            gold
            silver
            bronze
          }
          countriesWithSports {
            sport
            countries {
              country
              gold
              silver
              bronze
            }
          }
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
      universiadeMedal: {
        data: {
          attributes: MedalsUniversiadeT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade medals"',
  })
  
  if (json.data.universiadeMedal.data === null) {
    notFound()
  }
  
  const data = MedalsUniversiadeT.parse(json.data.universiadeMedal.data.attributes);

  return data;
}