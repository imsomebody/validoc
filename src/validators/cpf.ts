import { DocumentValidatorComparer, Validator } from "."

export class CpfDocument implements DocumentValidatorComparer {
  getDocumentValue() {
    return this.value.substring(this.startIndex, this.endIndex + 1)
  }
  getDocumentVerification() {
    return this.value.substring(this.verificationDigitsIndex)
  }

  startIndex: number = 0
  endIndex: number = 8
  verificationDigitsIndex: number = 9

  private value: string

  constructor(value: string) {
    this.value = value
  }
}

export const cpfValidationHandler: Validator = async (value) => {
  const cDoc = new CpfDocument(value.toString())

  let checkBuff = []

  function reduceBuffer() {
    const reduced = checkBuff.reduce((a, b) => a + b)
    checkBuff = []
    return reduced
  }

  function resolveReducedBuffer(value: any) {
    return value % 11 >= 10 ? 0 : value % 11
  }

  function getCountable(base) {
    return Array.from(base).map((value, index) => ({value, index}))
  }

  for (const { index, value } of getCountable(cDoc.getDocumentValue())) {
    checkBuff.push(Number(value) * (index + 1))
  }

  let reducedBuff = reduceBuffer()
  let verification0 = resolveReducedBuffer(reducedBuff)

  for (const { index, value } of getCountable(cDoc.getDocumentValue() + verification0.toString())) {
    checkBuff.push(Number(value) * index)
  }

  reducedBuff = reduceBuffer()
  let verification1 = resolveReducedBuffer(reducedBuff)

  return `${verification0}${verification1}` === cDoc.getDocumentVerification()
}
