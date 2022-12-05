import { cpfValidationHandler as cpf } from "./cpf"
import { cnpjValidationHandler as cnpj } from "./cnpj"
import { rgValidationHandler as rg } from "./rg"

import { getNumbers } from "../helpers"

export declare type ValidatorType = "cpf" | "rg" | "cnpj"
export declare type AcceptableValidatorValue = string | number
export declare type Validator = (
  value: AcceptableValidatorValue
) => Promise<boolean>

export declare interface DocumentValidatorComparer {
  startIndex: number
  endIndex: number
  verificationDigitsIndex: number

  getDocumentValue()
  getDocumentVerification()
}

declare type ValidatorDictionary = {
  [key in ValidatorType]: Validator
}

const validators: ValidatorDictionary = {
  cnpj,
  cpf,
  rg,
}

export function setValidatorHandler(type: ValidatorType, hand: Validator) {
  validators[type] = hand
}

export async function useValidateDocument(
  value: AcceptableValidatorValue,
  type: ValidatorType
) {
  return await validators[type].call(this, getNumbers(value))
}
