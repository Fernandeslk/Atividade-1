# Sistema de Gerenciamento de Funcionários

Aplicação em **TypeScript** que simula o gerenciamento de funcionários de uma empresa,
permitindo cadastrar, atualizar salários e consultar funcionários pelo RH.

---

## Estrutura do Projeto

    src/
    ├── Funcionario.ts
    ├── Empresa.ts
    └── index.ts
    README.md
    tsconfig.json

---

## Como Executar

### Pré-requisitos
- Node.js (v18+)
- TypeScript: `npm install -g typescript ts-node`

### Passos

```bash
npx ts-node src/index.ts
```

Ou compilar e rodar com Node:

```bash
tsc
node dist/index.js
```

---

## Testes Realizados

| Cenário | Resultado esperado |
|---|---|
| Cadastrar 3 funcionários | ✅ Sucesso |
| Cadastrar com matrícula duplicada | ❌ Erro tratado |
| Atualizar salário existente | ✅ Sucesso com log de antes/depois |
| Atualizar matrícula inexistente | ❌ Erro tratado |
| Atualizar com salário negativo | ❌ Erro tratado |
| Consultar funcionário existente | ✅ Exibe informações formatadas |
| Consultar matrícula inexistente | ❌ Mensagem informativa |