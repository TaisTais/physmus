import { CompetitionScheduleT } from "@/lib/types/universiade/competition-schedule";
import fetchData from "../fetchData";
import { notFound } from "next/navigation";

export const getCompetitionSchedule = async (): Promise<CompetitionScheduleT> => {
  const query = /*GraphQL*/ `
  query UniCompetitionSchedule {
    universiadeCompetitionSchedule {
      data {
        attributes {
          title
          competitions {
            title
            date
            address
          }
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
      universiadeCompetitionSchedule: {
        data: {
          attributes: CompetitionScheduleT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Competitios schedule of Universiade"',
  })
  
  if (json.data.universiadeCompetitionSchedule.data === null) {
    notFound()
  }
  
  const data = CompetitionScheduleT.parse(json.data.universiadeCompetitionSchedule.data.attributes);

  return data;
}
