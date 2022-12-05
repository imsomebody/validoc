import { cpfValidationHandler as cpf } from "./cpf"
import { cnpjValidationHandler as cnpj } from "./cnpj"
import { rgValidationHandler as rg } from "./rg"

import { getNumbers } from "../helpers"

/**
 * Representa um tipo de validador.
 */
export declare type ValidatorType = "cpf" | "rg" | "cnpj"
/**
 * Representa um tipo aceitavel de valor a ser comparado em um validador.
 */
export declare type AcceptableValidatorValue = string | number
/**
 * Representa o handler de um validador.
 */
export declare type Validator = (
  value: AcceptableValidatorValue
) => Promise<boolean>

/**
 * Representa um comparador de documento.
 * @internal
 */
export declare interface DocumentValidatorComparer {
  startIndex: number
  endIndex: number
  verificationDigitsIndex: number

  getDocumentValue()
  getDocumentVerification()
}

/**
 * Representa um dicionário de valodadores, tendo como chave um tipo e como valor um handler.
 */
declare type ValidatorDictionary = {
  [key in ValidatorType]: Validator
}

/**
 * Representa a coleção de validadores do pacote.
 */
const validators: ValidatorDictionary = {
  cnpj,
  cpf,
  rg,
}

/**
 * Define um handler específico para um tipo de validador.
 * @param type o tipo a sobrescrever
 * @param hand o novo handler
 */
export function setValidatorHandler(type: ValidatorType, hand: Validator) {
  validators[type] = hand
}

/**
 * Valida o formato fornecido.
 * @param value o valor a validar
 * @param type o tipo de valor
 * @returns {Boolean}
 */
export async function useValidateDocument(
  value: AcceptableValidatorValue,
  type: ValidatorType
) {
  return await validators[type].call(this, getNumbers(value))
}
