export function formatStartTime(rawStartTime: string) {
  if (rawStartTime.match('0:00')) {
    return undefined
  }

  let formattedTime = rawStartTime
  if (!rawStartTime.match(/PM|pm|AM|am$/)) {
    formattedTime = `${formattedTime}PM`
  }

  return formattedTime
}
