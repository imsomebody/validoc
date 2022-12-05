import { expect } from "chai"
import { describe, it } from "mocha"

import { useValidateDocument } from "../../validators"

describe("cnpj validator", () => {
  it("detects invalid", async () => {
    expect(await useValidateDocument("123", "cnpj")).to.be.false
  })

  it("detects valid", async () => {
    expect(await useValidateDocument("44.479.172/0001-65", "cnpj")).to.be.true
  })
})
