import { notFound } from "next/navigation";
import { FactsRecordsUniversiadeT } from "../../types/facts-records-universiade"
import fetchData from "../fetchData"

export const getFactsRecordsUniversiade = async (): Promise<FactsRecordsUniversiadeT> => {
  const query = /* GraphGL */ `
  query FactsRecords {
    uniFactRecord {
      data {
    	  attributes {
          record {
            images {
              data {
                attributes{
                  url
                }
              }
            }
            title
            text
          }
          fact {
            images {
              data {
                attributes{
                  url
                }
              }
            }
            title
            text
          }
        }
  	  }
    }
  }
  `
  const json = await fetchData<{
    data: {
      uniFactRecord: {
        data: {
          attributes: FactsRecordsUniversiadeT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Facts and Records Universiade"',
  })
  
  if (json.data.uniFactRecord.data === null) {
    notFound()
  }
  
  const data = FactsRecordsUniversiadeT.parse(json.data.uniFactRecord.data.attributes);

  return data;
};