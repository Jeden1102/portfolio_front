interface Attribute {
  name: string
  continent: string
}

export interface Destination {
  attributes: Attribute
}

interface DestinationsData {
  data: Destination[]
}

export interface DestinationsResponse {
  data: {
    destinations: DestinationsData
  }
}
