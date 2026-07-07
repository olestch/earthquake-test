import { useMemo, useState } from 'react'
import { generateSeismicEvents } from './entities/seismic-event/model/mock'
import type { SeismicEvent } from './entities/seismic-event/model/types'
import { EventFeed } from './widgets/event-feed/EventFeed'
import { EventDetails } from './widgets/event-details/EventDetails'

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<SeismicEvent | null>(null)

  const events = useMemo(
    () => generateSeismicEvents(50000),
    [],
  )

  return (
    <main>
      <h1>QuakeScope</h1>
      <p>Events loaded: {events.length}</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '16px' }}>
        <EventFeed
          events={events}
          selectedEventId={selectedEvent?.id ?? null}
          onSelectEvent={setSelectedEvent}
        />

        <EventDetails event={selectedEvent} />
      </div>
    </main>
  )
}