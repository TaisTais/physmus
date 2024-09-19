import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { StudentHeadquartersT } from "@/lib/types/universiade/student-headquarters";

export const getStudentHeadquarters = async (): Promise<StudentHeadquartersT> => {
  const query = /* GraphGL */ `
  query universiadeStudentHeadquarters {
    universiadeStudentHeadquarter {
      data {
        attributes {
          title
          text
          documents {
            data {
              attributes {
                url
              }
            }
          }
          headquarters {
            title
            members {
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              post
              name
              sfuPost
            }
          }
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      universiadeStudentHeadquarter: {
        data: {
          attributes: StudentHeadquartersT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade Student Headquarters"',
  })
  
  if (json.data.universiadeStudentHeadquarter.data === null) {
    notFound()
  }
  
  const data = StudentHeadquartersT.parse(json.data.universiadeStudentHeadquarter.data.attributes);

  return data;
};