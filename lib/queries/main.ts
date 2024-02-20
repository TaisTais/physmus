import { MainDescriptionT } from "../types/main"

export async function getMainDescription(): Promise<MainDescriptionT> {
  const headers = {
    "Content-Type": "application/json"
  }
  const query = `
  query GetMainDesc {
    mainDescription {
      data {
        attributes {
          description
          icons {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/qraphql`, {
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
    throw new Error('Failed to fetch data "Main Description"')
  }

  const json = (await res.json()) as {
    data: {
      mainDescription: {
        data: {
          attributes: MainDescriptionT
        } | null
      }
    }
  }

  const data = MainDescriptionT.parse(json.data.mainDescription.data?.attributes);

  return data
}