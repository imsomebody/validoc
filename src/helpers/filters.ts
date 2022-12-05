/**
 * Retorna apenas dígitos de uma sequencia de caracteres.
 * @param value 
 * @returns {String} de todos os numeros contidos em `value`
 */
export function getNumbers(value: any) {
  return value.toString().match(/\d+/g).join([])
}
