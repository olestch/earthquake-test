import type { SeismicEvent } from '../model/types'
import {
  formatCoordinates,
  formatDepth,
  formatMagnitude,
} from '../lib/formatters'

type Props = {
  event: SeismicEvent
  isSelected: boolean
  onClick: () => void
}

export function SeismicEventCard({ event, isSelected, onClick }: Props) {
  return (
    <article
      onClick={onClick}
      style={{
        boxSizing: 'border-box',
        padding: '12px',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f1f5f9' : '#ffffff',
      }}
    >
      <h3>{event.location}</h3>

      <p>Magnitude: {formatMagnitude(event.magnitude)}</p>
      <p>Depth: {formatDepth(event.depth)}</p>
      <p>Status: {event.status}</p>
      <p>Coordinates: {formatCoordinates(event.latitude, event.longitude)}</p>
    </article>
  )
}