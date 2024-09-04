import { GeographyOfParticipantsT } from "@/lib/types/universiade/geography-of-participants";
import fetchData from "../fetchData";
import { notFound } from "next/navigation";


export const getGeographyOfParticipants = async (): Promise<GeographyOfParticipantsT> => {
  const query = /* GraphQL */ `
  query UniversiadeGeographyOfParticipant {
    universiadeGeographyOfParticipant {
      data {
        attributes {
          title
          info {
            text
            countries {
              name
            }
            additionalText
          }
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
      universiadeGeographyOfParticipant: {
        data: {
          attributes: GeographyOfParticipantsT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Geography Of Universiade participants"',
  })
  
  if (json.data.universiadeGeographyOfParticipant.data === null) {
    notFound()
  }
  
  const data = GeographyOfParticipantsT.parse(json.data.universiadeGeographyOfParticipant.data.attributes);

  return data;
}