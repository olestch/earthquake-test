export function formatMagnitude(magnitude: number): string {
  return magnitude.toFixed(1)
}

export function formatDepth(depth: number): string {
  return `${depth.toFixed(0)} km`
}

export function formatCoordinates(latitude: number, longitude: number): string {
  return `${latitude.toFixed(3)}, ${longitude.toFixed(3)}`
}

export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}