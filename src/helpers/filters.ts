export function getNumbers(value: any) {
  return value.toString().match(/\d+/g).join([])
}
