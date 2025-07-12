# Souto Costa - Consulta de Processos

Pequeno servidor Express para que clientes acompanhem o andamento de seus processos online.

## Endpoints

- `GET /processos` - Lista todos os processos cadastrados.
- `GET /processos/:id` - Retorna detalhes de um processo específico.

## Como executar

Instale as dependências e compile o servidor:

```bash
npm install
npm run --workspace ./src/souto-costa build
```

Em seguida execute:

```bash
node src/souto-costa/dist/index.js
```

O servidor será iniciado na porta `3000` por padrão.
