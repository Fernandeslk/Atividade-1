---

## ▶️ Como Executar

### Pré-requisitos
- Node.js (v18+)
- TypeScript instalado globalmente: `npm install -g typescript ts-node`

### Passos

```bash
# 1. Instalar dependências (se houver)
npm install

# 2. Compilar e executar diretamente com ts-node
npx ts-node src/index.ts
```

Ou compilar e rodar com Node:

```bash
tsc
node dist/index.js
```

---

## 🧪 Testes Realizados

| Cenário | Resultado esperado |
|---|---|
| Cadastrar 3 funcionários | ✅ Sucesso |
| Cadastrar com matrícula duplicada | ❌ Erro tratado |
| Atualizar salário existente | ✅ Sucesso com log de antes/depois |
| Atualizar matrícula inexistente | ❌ Erro tratado |
| Atualizar com salário negativo | ❌ Erro tratado |
| Consultar funcionário existente | ✅ Exibe informações formatadas |
| Consultar matrícula inexistente | ❌ Mensagem informativa |