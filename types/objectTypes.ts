interface Attribute {
  name: string
}

interface ObjectType {
  attributes: Attribute
}

interface ObjectTypesData {
  data: ObjectType[]
}

export interface ObjectTypesResponse {
  data: {
    objectTypes: ObjectTypesData
  }
}
