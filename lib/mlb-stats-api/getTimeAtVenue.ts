import * as datefns from 'date-fns-tz'

const venueTimezoneMap: { [venueId: number]: string } = {
  // Citizens Bank Park
  2681: 'America/New_York'
}

export function getTimeAtVenue({
  venueId,
  date
}: {
  venueId: number
  date: string
}) {
  const timezone = venueTimezoneMap[venueId]
  if (!timezone) {
    return undefined
  }

  return datefns.format(datefns.utcToZonedTime(date, timezone), 'h:maaa')
}
