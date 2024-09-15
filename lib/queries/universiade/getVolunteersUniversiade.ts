import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { VolunteersUniversiadeT } from "@/lib/types/universiade/volunteers-universiade";

export const getVolunteersUniversiade = async (): Promise<VolunteersUniversiadeT> => {
  const query = /* GraphGL */ `
  query universiadeVolunteers {
    universiadeVolunteer {
      data {
        attributes {
          title
          amount {
            upperLine
            number
            lowerLine
          }
          description
          text
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      universiadeVolunteer: {
        data: {
          attributes: VolunteersUniversiadeT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade volunteers"',
  })
  
  if (json.data.universiadeVolunteer.data === null) {
    notFound()
  }
  
  const data = VolunteersUniversiadeT.parse(json.data.universiadeVolunteer.data.attributes);

  return data;
};