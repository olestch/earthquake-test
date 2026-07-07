export type SeismicEventStatus = 'automatic' | 'reviewed'

export type SeismicEvent = {
  id: string
  magnitude: number
  depth: number
  latitude: number
  longitude: number
  location: string
  occurredAt: string
  casualtiesRegistered: boolean
  status: SeismicEventStatus
  description: string | null
}

export type SeismicEventFilters = {
  minMagnitude: number | null
  maxMagnitude: number | null
  minDepth: number | null
  maxDepth: number | null
  search: string
  status: SeismicEventStatus | 'all'
  casualtiesOnly: boolean
}