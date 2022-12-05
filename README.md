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

O pacote exporta a função `useValidateDocument` que recebe o valor a ser verificado e o tipo de valor. O tipo é declarado em `type ValidatorType`.
A função é assíncrona e deve ser aguardada. Retorna verdadeiro ou falso, de acordo com a validação.

```
import { useValidateDocument } from 'validoc'

async function saySomething() {
    console.log(await useValidateDocument("123", "cnpj")) // retorna falso, invalido
    console.log(await useValidateDocument("44.479.172/0001-65", "cnpj")) // retorna verdadeiro, valido
}

saySomething.call()
```

## Tipos Suportados

Os seguintes tipos são suportados.

| Documento | type | Implementado | Modo                                                                                       |
|-----------|------|--------------|--------------------------------------------------------------------------------------------|
| RG        | rg   | Sim          | Regex (identifica os blocos)                                                               |
| CPF       | cpf  | Sim          | Algoritmo (identifica a consistência pelo algoritmo, retorna positivo para CPFs de teste)  |
| CNPJ      | cnpj | Sim          | Algoritmo (identifica a consistência pelo algoritmo, retorna positivo para CNPJs de teste) |
