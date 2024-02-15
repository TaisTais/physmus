type ImageT = {
  data: {
    attributes: {
      url: string
    }
  } | null
}

type ImagesArrayT = {
  data: Array<{
    attributes: {
      url: string
    }
  }>
}

type MainDescriptionT ={
  description: string,
  icons: {
    "data": ImagesArrayT
  }
}

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
          attributes: {
            description: {
              icons: {
                data: {
                  attributes: {
                    url: string
                  }
                }
              }
            }
          }
        }
      }
    }
  }


}