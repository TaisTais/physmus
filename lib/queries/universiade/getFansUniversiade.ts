import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { FansUniversiadeT } from "@/lib/types/universiade/fans-universiade";

export const getFansUniversiade = async (): Promise<FansUniversiadeT> => {
  const query = /* GraphGL */ `
  query universiadeFan {
    universiadeFan {
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
      universiadeFan: {
        data: {
          attributes: FansUniversiadeT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade fans"',
  })
  
  if (json.data.universiadeFan.data === null) {
    notFound()
  }
  
  const data = FansUniversiadeT.parse(json.data.universiadeFan.data.attributes);

  return data;
};