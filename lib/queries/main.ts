import { notFound } from "next/navigation"
import { FactsRecordsUniversiadeT, SportCategoriesT, SportT, SportsT, SportsmanT, SportsmansArrayT } from "../types/main"



export const getFactsRecordsUniversiade = async (): Promise<FactsRecordsUniversiadeT> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
  query FactsRecords {
    factsRecords {
      data {
        attributes {
          text
        }
      }
    }
  }
  `;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    next: { 
      tags: ["strapi"],
      revalidate: 60
    },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Facts and Records Universiade'");
  }

  const json = await res.json() as {
    data: {
      factsRecords: { 
        data: { 
          attributes: FactsRecordsUniversiadeT
        }
      }
    }
  };

  if (json.data.factsRecords.data === null) {
    notFound()
  }

  const data = FactsRecordsUniversiadeT.parse(json.data.factsRecords.data.attributes);

  return data;
};

// ********************************* SPORTSMAN ********************************* //
export async function getSportsmans({
  page,
  per,
  search = "",
  universiade,
  sportId
}: {
  page: number,
  per: number,
  search?: string,
  universiade?: boolean,
  sportId?: string,
}): Promise<SportsmansArrayT> {
  const headers = {
    "Content-Type": "application/json"
  }
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
            ? `{sport: { 
                id: {eqi: "${sportId}"} 
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
          additional_info
          achievements {
            year
            description
          }
          sport {
            data {
              id
              attributes {
                name
              }
            }
          }
          variety_sport
          universiade2019
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
    throw new Error('Failed to fetch data "Sportsmans"')
  }

  const json = (await res.json()) as {
    data: {
      sportsmans: SportsmansArrayT
    }
  }

  if ((json.data.sportsmans.meta.pagination.total === 0) || (json.data.sportsmans.data.length === 0)) {
    notFound()
  }

  const data = SportsmansArrayT.parse(json.data.sportsmans);

  return data
}

export const getSportsmanById = async (id: string): Promise<SportsmanT> => {
  const headers = { "Content-Type": "application/json" };
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
          additional_info
          achievements {
            year
            description
          }
          sport {
            data {
              id
              attributes {
                name
              }
            }
          }
          variety_sport
          universiade2019
        }
      }
    }
  }
  `;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    next: { 
      tags: ["strapi"],
      revalidate: 60
    },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Sportsman By ID'");
  }

  const json = await res.json() as {
    data: {
      sportsman: { data: SportsmanT }
    }
  };

  if (json.data.sportsman.data === null) {
    notFound()
  }

  const data = SportsmanT.parse(json.data.sportsman.data);

  return data;
};

// ********************************* SPORTS ********************************* //
export async function getSportsCategories(): Promise<SportCategoriesT> {
  const headers = {
    "Content-Type": "application/json"
  }
  const query = /* GraphGL */ `
    query SportCategories {
      sportCategories {
        meta {
          pagination { total }
        }
        data {
          id
          attributes {
            name
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
    throw new Error('Failed to fetch data "SportCategories"')
  }

  const json = (await res.json()) as {
    data: {
      sportCategories: SportCategoriesT
    }
  }

  if ((json.data.sportCategories.meta.pagination.total === 0) || (json.data.sportCategories.data.length === 0)) {
    notFound()
  }

  const data = SportCategoriesT.parse(json.data.sportCategories);

  return data
}

export async function getSports({
  categoryId,
  universiade
}: {
  categoryId?: string,
  universiade?: boolean
}): Promise<SportsT> {
  const headers = {
    "Content-Type": "application/json"
  }
  const query = /* GraphGL */ `
  query Sports {
    sports(
      filters: {
        and: [
          ${categoryId !== undefined 
            ? `{category: { id: {eqi: "${categoryId}" } }},`
            : ""
          }
          ${universiade ? `{universiade2019: {eqi: true}},` : ""}
        ]
      }
    ) {
      meta {
        pagination { total }
      }
      data {
        id
        attributes {
          name
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
    throw new Error('Failed to fetch data "Sports"')
  }

  const json = (await res.json()) as {
    data: {
      sports: SportsT
    }
  }

  if ((json.data.sports.meta.pagination.total === 0) || (json.data.sports.data.length === 0)) {
    notFound()
  }

  const data = SportsT.parse(json.data.sports);

  return data
}

export const getSportById = async (id: string): Promise<SportT> => {
  const headers = { "Content-Type": "application/json" };
  const query = /* GraphGL */ `
  query Sport {
    sport(id: "${id}") {
      data {
        id
        attributes {
          name
          category {
            data {
              id
              attributes { name }
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
  `;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    next: { 
      tags: ["strapi"],
      revalidate: 60
    },
  });

  if (!res.ok) {
    // Log the error to an error reporting service
    const err = await res.text();
    console.log(err);
    // Throw an error
    throw new Error("Failed to fetch data 'Sport By ID'");
  }

  const json = await res.json() as {
    data: {
      sport: { data: SportT }
    }
  };

  if (json.data.sport.data === null) {
    notFound()
  }

  const data = SportT.parse(json.data.sport.data);

  return data;
};