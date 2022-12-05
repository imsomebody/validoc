# Validoc

![CI](https://github.com/imsomebody/validoc/actions/workflows/main.yml/badge.svg) [![npm version](https://badge.fury.io/js/validoc.svg)](https://badge.fury.io/js/validoc)

Validação de tipos comuns de documentos e formatos brasileiros em JavaScript.

## Quick Start

Instalar o pacote:

npm:
`npm install validoc`

Importar a função:
`import { useValidateDocument } from 'validoc'`

Utilização:

```
import { useValidateDocument } from 'validoc'

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
