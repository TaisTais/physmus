import { notFound } from "next/navigation"
import { GtoDocsT, GtoHistoryT, GtoNormsT, GtoSignsT, GtoT } from "../types/gto"
import fetchData from "./fetchData"

export const getGto = async (): Promise<GtoT> => {
    const query = /* GraphGL */ `
    query Gto {
      gto {
        data {
          attributes {
            text
            links {
              title
              link
            }
          }
        }
      }
    }
    `
    const json = await fetchData<{
      data: {
        gto: {
          data: {
            attributes: GtoT
          } | null
        }
      }
    }>({
      query,
      error: 'Failed to fetch data "GTO"',
    })
    
    if (json.data.gto.data === null) {
      notFound()
    }
  
    const data = GtoT.parse(json.data.gto.data.attributes);
    return data;
}

export const getGtoHistory = async (): Promise<GtoHistoryT> => {
    const query = /* GraphGL */ `
    query GtoHistory {
      gtoHistory {
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
        gtoHistory: {
          data: {
            attributes: GtoHistoryT
          } | null
        }
      }
    }>({
      query,
      error: 'Failed to fetch data "GTO History"',
    })
    
    if (json.data.gtoHistory.data === null) {
      notFound()
    }
  
    const data = GtoHistoryT.parse(json.data.gtoHistory.data.attributes);
    return data;
}

export const getGtoSigns = async (): Promise<GtoSignsT> => {
    const query = /* GraphGL */ `
    query GtoSigns {
      gtoSigns {
        data {
          attributes {
            text
            items {
              title
              image {
                data {
                  attributes { url }
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
        gtoSigns: {
          data: {
            attributes: GtoSignsT
          } | null
        }
      }
    }>({
      query,
      error: 'Failed to fetch data "GTO History"',
    })
    
    if (json.data.gtoSigns.data === null) {
      notFound()
    }
  
    const data = GtoSignsT.parse(json.data.gtoSigns.data.attributes);
    return data;
}

export const getGtoDocs = async (): Promise<GtoDocsT> => {
    const query = /* GraphGL */ `
    query GtoDocs {
      gtoDocs {
        data {
          attributes {
            text
            items {
              title
              file {
                data {
                  attributes { url }
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
        gtoDocs: {
          data: {
            attributes: GtoDocsT
          } | null
        }
      }
    }>({
      query,
      error: 'Failed to fetch data "GTO Docs"',
    })
    
    if (json.data.gtoDocs.data === null) {
      notFound()
    }
  
    const data = GtoDocsT.parse(json.data.gtoDocs.data.attributes);
    return data;
}

export const getGtoNorms = async (): Promise<GtoNormsT> => {
    const query = /* GraphGL */ `
    query GtoNorms {
      gtoNorms {
        data {
          attributes {
            text
            items {
              title
              file {
                data {
                  attributes { url }
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
        gtoNorms: {
          data: {
            attributes: GtoNormsT
          } | null
        }
      }
    }>({
      query,
      error: 'Failed to fetch data "GTO Norms"',
    })
    
    if (json.data.gtoNorms.data === null) {
      notFound()
    }
  
    const data = GtoNormsT.parse(json.data.gtoNorms.data.attributes);
    return data;
}