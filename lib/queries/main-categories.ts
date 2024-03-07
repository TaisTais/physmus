import { MainCategoriesT } from "../types/main-categories"

export async function getMainCategories(): Promise<MainCategoriesT> {
  const headers = {
    "Content-Type": "application/json"
  }
  const query = /* GraphGL */ `
    query GetMainCategories {
      mainCategory {
        data {
          attributes {
            universiade {
              title
              description
              image {
                data { attributes { url } }
              }
            }
            sports {
              title
              description
              image {
                data { attributes { url } }
              }
            }
            gto {
              title
              description
              image {
                data { attributes { url } }
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
    throw new Error('Failed to fetch data "Main Categories"')
  }

  const json = (await res.json()) as {
    data: {
      mainCategory: {
        data: {
          attributes: MainCategoriesT
        }
      }
    }
  }

  const data = MainCategoriesT.parse(json.data.mainCategory.data.attributes);
  return data
}