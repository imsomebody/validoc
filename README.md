# Validoc

![CI](https://github.com/imsomebody/validoc/actions/workflows/main.yml/badge.svg)

Validação de tipos comuns de documentos e formatos brasileiros em JavaScript.

## Quick Start

Instalar o pacote:

npm:
`npm install @todo/set-name`

Importar a função:
`import { useValidateDocument } from '@todo/set-name'`

Utilização:

```
import { useValidateDocument } from '@todo/set-name'

async function saySomething() {
    console.log(await useValidateDocument("123", "cnpj")) // retorna falso, invalido
    console.log(await useValidateDocument("44.479.172/0001-65", "cnpj")) // retorna verdadeiro, valido
}

saySomething.call()
```

## Tipos Suportados

| Documento | type | Implementado |
| --------- | ---- | ------------ |
| RG        | rg   | Não          |
| CPF       | cpf  | Sim          |
| CNPJ      | cnpj | Sim          |
