export function getPutoutPositions(putout: string) {
  return putout
    .split('')
    .map(Number)
    .filter((p) => !!p)
}
