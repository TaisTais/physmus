import { notFound } from "next/navigation";
import { AboutUniversiadeT } from "../types/about-universiade"
import fetchData from "./fetchData"

export const getAboutUniversiade = async (): Promise<AboutUniversiadeT> => {
  const query = /* GraphGL */ `
  query AboutUniversiade {
    aboutUniversiade {
      data {
        attributes {
          text
        }
      }
    }
  }
  `
  const json = await fetchData<{
    data: {
      aboutUniversiade: {
        data: {
          attributes: AboutUniversiadeT
        }
      }
    }
  }>({
    query,
    error: 'Failed to fetch data "About Universiade"',
  })
  
  if (json.data.aboutUniversiade.data === null) {
    notFound()
  }

  const data = AboutUniversiadeT.parse(json.data.aboutUniversiade.data.attributes);
  return data;
};
