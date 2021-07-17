export function getPosition(position: number | string) {
  if (
    position !== 1 &&
    position !== 2 &&
    position !== 3 &&
    position !== 4 &&
    position !== 5 &&
    position !== 6 &&
    position !== 7 &&
    position !== 8 &&
    position !== 9 &&
    position !== 'DH' &&
    position !== 'PH' &&
    position !== 'PR'
  ) {
    throw new Error(`Invalid position ${position}`)
  }

  return position
}
