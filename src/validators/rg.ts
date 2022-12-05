import { Validator } from "."
import { getNumbers } from "../helpers";

/**
 * Handler de validação padrão para RGs.
 * RGs possuem várias formas, o comparador identifica blocos de 1-2, 3 e 3 dígitos, incluindo os dígitos verificadores com X.
 * @remarks não recomendado para cenários de produção, experimental
 * @param value valor a verificar
 * @returns {Boolean}
 */
export const rgValidationHandler: Validator = async (value) => {
  return /(^\d{1,2})(\d{3})(\d{3})-?(\d{1}|X|x$)/g.exec(getNumbers(value.toString())) !== null
}
