import { expect } from "chai"
import { describe, it } from "mocha"

import { useValidateDocument } from "../../validators"

describe("cpf validator", () => {
  it("detects invalid", async () => {
    expect(await useValidateDocument("123", "cpf")).to.be.false
  })

  it("detects valid", async () => {
    expect(await useValidateDocument("781.450.500-30", "cpf")).to.be.true
  })
})
