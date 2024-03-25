interface Attribute {
  name: string
}

export interface VacationType {
  attributes: Attribute
}

interface VacationTypesData {
  data: VacationType[]
}

export interface VacationTypesResponse {
  data: {
    vacationTypes: VacationTypesData
  }
}
