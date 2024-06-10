import { notFound } from "next/navigation";
import { FactsRecordsUniversiadeT } from "../../types/facts-records-universiade"
import fetchData from "../fetchData"

export const getFactsRecordsUniversiade = async (): Promise<FactsRecordsUniversiadeT> => {
  const query = /* GraphGL */ `
  query FactsRecords {
    factsRecords {
      data {
        attributes {
          text
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      factsRecords: {
        data: {
          attributes: FactsRecordsUniversiadeT
        }
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "Facts and Records Universiade"',
  })
  
  if (json.data.factsRecords.data === null) {
    notFound()
  }
  
  const data = FactsRecordsUniversiadeT.parse(json.data.factsRecords.data.attributes);

  return data;
};