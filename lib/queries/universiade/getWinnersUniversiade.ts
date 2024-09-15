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
              id
              attributes {
                fio
                rank
                images {
                  data { attributes { url } }
                }
                info
                additional_info
                sports {
                  data {
                    id
                    attributes {
                      title
                      category {
                        data {
                          attributes {
                            color
                          }
                        }
                      }
                    }
                  }
                }
                uni_sport {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
                universiade2019
              }
            }
          }
          participants {
            data {
              id
              attributes {
                fio
                rank
                images {
                  data { attributes { url } }
                }
                info
                additional_info
                sports {
                  data {
                    id
                    attributes {
                      title
                      category {
                        data {
                          attributes {
                            color
                          }
                        }
                      }
                    }
                  }
                }
                uni_sport {
                  data {
                    id
                    attributes {
                      title
                    }
                  }
                }
                universiade2019
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