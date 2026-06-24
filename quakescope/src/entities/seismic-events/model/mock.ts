import type { SeismicEvent, SeismicEventStatus } from './types'

const LOCATIONS = [
  'Japan, Honshu',
  'Chile, Atacama',
  'Indonesia, Java',
  'Turkey, Anatolia',
  'USA, California',
  'Mexico, Oaxaca',
  'Iceland, Reykjanes',
  'New Zealand, North Island',
  'Greece, Crete',
  'Philippines, Mindanao',
]

const DESCRIPTIONS = [
  'Moderate seismic activity detected by automatic monitoring systems.',
  'Event reviewed by seismic analysts.',
  'Shallow earthquake registered near populated area.',
  'No significant infrastructure impact reported.',
  'Aftershock activity possible within the next hours.',
]

function getRandomNumber(min: number, max: number, fractionDigits = 2): number {
  return Number((Math.random() * (max - min) + min).toFixed(fractionDigits))
}

function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function getRandomDateWithinLastYear(): string {
  const now = Date.now()
  const yearInMs = 365 * 24 * 60 * 60 * 1000
  const timestamp = now - Math.random() * yearInMs

  return new Date(timestamp).toISOString()
}

function getRandomStatus(): SeismicEventStatus {
  return Math.random() > 0.35 ? 'automatic' : 'reviewed'
}

function getRandomDescription(): string | null {
  return Math.random() > 0.45 ? getRandomItem(DESCRIPTIONS) : null
}

export function generateSeismicEvents(count: number): SeismicEvent[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `event-${index + 1}`,
    magnitude: getRandomNumber(1, 9, 1),
    depth: getRandomNumber(1, 700, 1),
    latitude: getRandomNumber(-90, 90, 4),
    longitude: getRandomNumber(-180, 180, 4),
    location: getRandomItem(LOCATIONS),
    occurredAt: getRandomDateWithinLastYear(),
    casualtiesRegistered: Math.random() > 0.94,
    status: getRandomStatus(),
    description: getRandomDescription(),
  }))
}