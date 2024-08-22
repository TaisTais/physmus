import { notFound } from "next/navigation"
import { ExhibitsArrayT, ExhibitT } from "../types/exhibits"
import fetchData from "./fetchData"

export async function getExhibits({
  page,
  per,
  search = "",
  sportId,
  uniSportId
}: {
  page: number,
  per: number,
  search?: string,
  sportId?: string,
  uniSportId?: string
}): Promise<ExhibitsArrayT> {
  const query = /* GraphGL */ `
  query Exhibits {
    exhibits(
      pagination: {
        page: ${page},
        pageSize: ${per}
      },
      filters: {
        and: [
          {title: { containsi: "${search}" }},
          ${sportId
            ? `{sport: { 
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
          title
          description
          text
          images {
            data { attributes { url } }
          }
          pdfs {
            data { attributes { url } }
          }
          model3d {
            data { attributes { url } }
          }
        }
      }
    }
  }
  `
  
  const json = await fetchData<{
    data: {
      exhibits: ExhibitsArrayT
    }
  }>({
    query,
    error: 'Failed to fetch data "Exhibits"',
  })
  
  if ((json.data.exhibits.meta.pagination.total === 0) || (json.data.exhibits.data.length === 0)) {
    notFound()
  }

  const data = ExhibitsArrayT.parse(json.data.exhibits);
  
  return data
}

export const getExhibitById = async (id: string): Promise<ExhibitT> => {
  const query = /* GraphGL */ `
  query Exhibit {
    exhibit(id: "${id}") {
      data {
        id
        attributes {
          title
          description
          text
          images {
            data { attributes { url } }
          }
          pdfs {
            data { attributes { url } }
          }
          model3d {
            data { attributes { url } }
          }
        }
      }
    }
  }
  `
  
  const json = await fetchData<{
    data: {
      exhibit: { data: ExhibitT }
    }
  }>({
    query,
    error: 'Failed to fetch data "Exhibit By ID"',
  })

  if (json.data.exhibit.data === null) {
    notFound()
  }

  const data = ExhibitT.parse(json.data.exhibit.data);

  return data;
};