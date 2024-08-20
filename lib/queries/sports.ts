import { notFound } from "next/navigation"
import { SportCategoriesT, SportT, SportsT } from "../types/sports"
import fetchData from "./fetchData"

export async function getSportsCategories(): Promise<SportCategoriesT> {
  const query = /* GraphGL */ `
    query SportCategories {
      sportCategories {
        meta {
          pagination { total }
        }
        data {
          id
          attributes {
            title
            color
            darkColor
            sports {
              data {
                id
                attributes {
                  title
                }
              }
            }
          }
        }
      }
    }
  `

  const json = await fetchData<{
    data: {
      sportCategories: SportCategoriesT
    }
  }>({
    query,
    error: 'Failed to fetch data "SportCategories"',
  })
  
  if ((json.data.sportCategories.meta.pagination.total === 0) || (json.data.sportCategories.data.length === 0)) {
    notFound()
  }
  
  const data = SportCategoriesT.parse(json.data.sportCategories);

  return data
}

export async function getSports({
  categoryId,
}: {
  categoryId?: string,
}): Promise<SportsT> {
  const query = /* GraphGL */ `
  query Sports {
    sports(
      filters: {
        and: [
          ${categoryId !== undefined 
            ? `{category: { id: {eqi: "${categoryId}" } }},`
            : ""
          }
        ]
      }
    ) {
      meta {
        pagination { total }
      }
      data {
        id
        attributes {
          title
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
      sports: SportsT
    }
  }>({
    query,
    error: 'Failed to fetch data "Sports"',
  })
  
  if ((json.data.sports.meta.pagination.total === 0) || (json.data.sports.data.length === 0)) {
    notFound()
  }

  const data = SportsT.parse(json.data.sports);

  return data
}

export const getSportById = async (id: string): Promise<SportT> => {
  const query = /* GraphGL */ `
  query Sport {
    sport(id: "${id}") {
      data {
        id
        attributes {
          title
          category {
            data {
              id
              attributes { title }
            }
          }
          images {
            data {attributes { url }}
          }
          description
          history
          historyImages {
            data { attributes { url } }
          }
          timeline {
            title
            description
          }
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
      sport: { data: SportT }
    }
  }>({
    query,
    error: 'Failed to fetch data "Sport By ID"',
  })
  
  if (json.data.sport.data === null) {
    notFound()
  }

  const data = SportT.parse(json.data.sport.data);

  return data;
};