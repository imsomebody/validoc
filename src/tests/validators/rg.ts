import { expect } from "chai"
import { describe, it } from "mocha"

import { useValidateDocument } from "../../validators"

describe("rg validator", () => {
  it("detects invalid", async () => {
    expect(await useValidateDocument("123", "rg")).to.be.false
  })

  it("detects valid", async () => {
    expect(await useValidateDocument("427460402X", "rg")).to.be.true
  })
})
