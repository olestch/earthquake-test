import type { SeismicEvent } from '../../entities/seismic-event/model/types'
import {
  formatCoordinates,
  formatDateTime,
  formatDepth,
  formatMagnitude,
} from '../../entities/seismic-event/lib/formatters'

type EventDetailsProps = {
  event: SeismicEvent | null
}

export function EventDetails({ event }: EventDetailsProps) {
  if (!event) {
    return (
      <aside>
        <h2>Event details</h2>
        <p>Select an event from the feed.</p>
      </aside>
    )
  }

  return (
    <aside>
      <h2>{event.location}</h2>
      <p>Magnitude: {formatMagnitude(event.magnitude)}</p>
      <p>Depth: {formatDepth(event.depth)}</p>
      <p>Status: {event.status}</p>
      <p>Coordinates: {formatCoordinates(event.latitude, event.longitude)}</p>
      <p>Occurred at: {formatDateTime(event.occurredAt)}</p>
      <p>Casualties: {event.casualtiesRegistered ? 'yes' : 'no'}</p>
      <p>Description: {event.description ?? 'No description'}</p>
    </aside>
  )
}