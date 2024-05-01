export default async function fetchData<T>({
  query,
  error,
  variables
}:{
  query: string;
  error: string;
  variables?: unknown;
}) {
  const headers = {
    "Content-Type": "application/json"
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables
    }),
    next: {
      tags: ["strapi"]
    }
  })
  if (!res.ok) {
    const err = await res.text()
    console.log(err)
    throw new Error(error)
  }
  const json = (await res.json()) as T
  return json;
}