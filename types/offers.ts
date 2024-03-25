interface Attribute {
  name: string
}

interface Offer {
  attributes: Attribute
}

interface OffersData {
  data: Offer[]
}

export interface OffersResponse {
  data: {
    offers: OffersData
  }
}
