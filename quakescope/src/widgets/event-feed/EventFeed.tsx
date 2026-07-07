import { useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import type { SeismicEvent } from '../../entities/seismic-event/model/types'
import { SeismicEventCard } from '../../entities/seismic-event/ui/SeismicEventCard'

type Props = {
  events: SeismicEvent[]
  selectedEventId: string | null
  onSelectEvent: (event: SeismicEvent) => void
}

export function EventFeed({ events, selectedEventId, onSelectEvent }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  const virtualizer = useVirtualizer({
    count: events.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 120,
    overscan: 8,
  })

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: '600px',
        overflow: 'auto',
        border: '1px solid #ddd',
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const event = events[virtualItem.index]

          return (
            <div
              key={event.id}
              ref={virtualizer.measureElement}
              data-index={virtualItem.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <SeismicEventCard
                event={event}
                isSelected={event.id === selectedEventId}
                onClick={() => onSelectEvent(event)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}