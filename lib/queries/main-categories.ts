import { MainCategoryT } from "../types/main-categories"

export async function getMainCategories(): Promise<MainCategoryT> {
  const headers = {
    "Content-Type": "application/json"
  }
  const query = /* GraphGL */ `
  query GetMainCategories {
    mainCategories {
      data {
        attributes {
          title
          description
          background {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
  `
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query
    }),
    next: {
      tags: ["strapi"]
    }
  })

  if (!res.ok) {
    const err = await res.text()
    console.log(err)
    throw new Error('Failed to fetch data "Main Category"')
  }

  const json = (await res.json()) as {
    data: {
      mainCategories: {
        data: {
          attributes: MainCategoryT
        } | null
      }
    }
  }

  const data = MainCategoryT.parse(json.data.mainCategories.data?.attributes);
  return data
}