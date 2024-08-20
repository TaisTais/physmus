import { notFound } from "next/navigation"
import { SportsmanT, SportsmansArrayT } from "../types/sportsman"
import fetchData from "./fetchData"

export async function getSportsmans({
  page,
  per,
  search = "",
  universiade,
  sportId,
  uniSportId
}: {
  page: number,
  per: number,
  search?: string,
  universiade?: boolean,
  sportId?: string,
  uniSportId?: string
}): Promise<SportsmansArrayT> {
  const query = /* GraphGL */ `
  query Sportsmans {
    sportsmans(
      pagination: {
        page: ${page},
        pageSize: ${per}
      },
      filters: {
        and: [
          {fio: { containsi: "${search}" }},
          ${universiade ? `{universiade2019: { not: null }},` : ""}
          ${sportId 
            ? `{sports: { 
                id: {eqi: "${sportId}"} 
              }}`
            : ""
          }
          ${uniSportId 
            ? `{uni_sport: { 
                id: {eqi: "${uniSportId}"} 
              }}`
            : ""
          }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          fio
          rank
          images {
            data { attributes { url } }
          }
          info
          additional_info
          sports {
            data {
              id
              attributes {
                title
                category {
                  data {
                    attributes {
                      color
                    }
                  }
                }
              }
            }
          }
          uni_sport {
            data {
              id
              attributes {
                title
              }
            }
          }
          universiade2019
        }
      }
    }
  }
  `
  
  const json = await fetchData<{
    data: {
      sportsmans: SportsmansArrayT
    }
  }>({
    query,
    error: 'Failed to fetch data "Sportsmans"',
  })
  
  if ((json.data.sportsmans.meta.pagination.total === 0) || (json.data.sportsmans.data.length === 0)) {
    notFound()
  }

  const data = SportsmansArrayT.parse(json.data.sportsmans);
  return data
}

export const getSportsmanById = async (id: string): Promise<SportsmanT> => {
  const query = /* GraphGL */ `
  query Sportsman {
    sportsman(id: "${id}") {
      data {
        id
        attributes {
          fio
          rank
          images {
            data { attributes { url } }
          }
          info
          additional_info
          sports {
            data {
              id
              attributes {
                title
                category {
                  data {
                    attributes {
                      color
                    }
                  }
                }
              }
            }
          }
          uni_sport {
            data {
              id
              attributes {
                title
              }
            }
          }
          universiade2019
        }
      }
    }
  }
  `
  
  const json = await fetchData<{
    data: {
      sportsman: { data: SportsmanT }
    }
  }>({
    query,
    error: 'Failed to fetch data "Sportsman By ID"',
  })

  if (json.data.sportsman.data === null) {
    notFound()
  }

  const data = SportsmanT.parse(json.data.sportsman.data);

  return data;
};