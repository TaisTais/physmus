import { notFound } from "next/navigation"
import { SportCategoriesT, SportT, SportsT } from "../../types/sports"
import fetchData from "../fetchData"

export async function getUniSportsCategories(): Promise<SportCategoriesT> {
  const query = /* GraphGL */ `
    query UniSportCategories {
      uniSportCategories {
        meta {
          pagination { total }
        }
        data {
          id
          attributes {
            title
            color
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
        uniSportCategories: SportCategoriesT
    }
  }>({
    query,
    error: 'Failed to fetch data "UniSportCategories"',
  })
  
  if ((json.data.uniSportCategories.meta.pagination.total === 0) || (json.data.uniSportCategories.data.length === 0)) {
    notFound()
  }
  
  const data = SportCategoriesT.parse(json.data.uniSportCategories);

  return data
}

export async function getUniSports({
  categoryId,
}: {
  categoryId?: string,
}): Promise<SportsT> {
  const query = /* GraphGL */ `
  query UniSports {
    uniSports(
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
        uniSports: SportsT
    }
  }>({
    query,
    error: 'Failed to fetch data "UniSports"',
  })
  
  if ((json.data.uniSports.meta.pagination.total === 0) || (json.data.uniSports.data.length === 0)) {
    notFound()
  }

  const data = SportsT.parse(json.data.uniSports);

  return data
}

export const getUniSportById = async (id: string): Promise<SportT> => {
  const query = /* GraphGL */ `
  query UniSport {
    uniSport(id: "${id}") {
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
        }
      }
    }
  }
  `

  const json = await fetchData<{
    data: {
        uniSport: { data: SportT }
    }
  }>({
    query,
    error: 'Failed to fetch data "UniSport By ID"',
  })
  
  if (json.data.uniSport.data === null) {
    notFound()
  }

  const data = SportT.parse(json.data.uniSport.data);

  return data;
};