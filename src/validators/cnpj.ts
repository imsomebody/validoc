import { Validator } from "."
import { getNumbers } from "../helpers"

/**
 * Handler de validação padrão para CNPJs.
 * @param value o valor a validar
 * @returns {Boolean}
 */
export const cnpjValidationHandler: Validator = async (value) => {
  const cnpj = getNumbers(value.toString())

  if (cnpj == "") return false

  if (cnpj.length != 14) return false

  // Valida DVs
  let size = cnpj.length - 2
  let numbers = cnpj.substring(0, size)
  const digits = cnpj.substring(size)
  let sum = 0
  let pos = size - 7

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--
    if (pos < 2) pos = 9
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result != digits.charAt(0)) return false

  size = size + 1
  numbers = cnpj.substring(0, size)
  sum = 0
  pos = size - 7
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--
    if (pos < 2) pos = 9
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result != digits.charAt(1)) return false

  return true
}
