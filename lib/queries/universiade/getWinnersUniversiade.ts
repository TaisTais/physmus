import { notFound } from "next/navigation";
import fetchData from "../fetchData"
import { WinnersUniversiadeT } from "@/lib/types/universiade/winners-universiade";

export const getWinnersUniversiade = async (): Promise<WinnersUniversiadeT> => {
  const query = /* GraphGL */ `
  query universiadeWinners {
    universiadeWinner {
      data {
        attributes {
          title
          description
          figures {
            number
            object
          }
          text
          winners {
            data {
              attributes {
                fio
                sports {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                info
                uni_sport {
                  data {
                    attributes {
                      title
                    }
                  }
                }
              }
            }
          }
          participants {
            data {
              attributes {
                fio
                sports {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                info
                uni_sport {
                  data {
                    attributes {
                      title
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
  `
  const json = await fetchData<{
    data: {
      universiadeWinner: {
        data: {
          attributes: WinnersUniversiadeT
        }
      }
  }
}>({
    query,
    error: 'Failed to fetch data "Universiade volunteers"',
  })
  
  if (json.data.universiadeWinner.data === null) {
    notFound()
  }
  
  const data = WinnersUniversiadeT.parse(json.data.universiadeWinner.data.attributes);

  return data;
};