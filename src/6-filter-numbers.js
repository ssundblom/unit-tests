export const filterNumbers = (array, largerThan) => {
  return array.filter((value) => {
    return value <= largerThan
  })
}
