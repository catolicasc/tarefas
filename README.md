<img src="assets/icon.svg" width="64" height="64" alt="">

# API de Tarefas

API didática de CRUD para uma lista de tarefas no estilo kanban.
Feita com Express e SQLite, sem autenticação.

## Como rodar

Requer Node.js 22.13 ou mais novo.

```bash
npm install
npm start
```

A API sobe em `http://localhost:3000`. Use `npm run dev` para reiniciar sozinha a cada alteração no código.

O banco é o arquivo `dados/tarefas.db`, criado na primeira execução com quatro tarefas de exemplo. Para recomeçar do zero, apague a pasta `dados/`.

| Variável  | Padrão             | Para que serve              |
| --------- | ------------------ | --------------------------- |
| `PORT`    | `3000`             | Porta da API                |
| `DB_PATH` | `dados/tarefas.db` | Caminho do arquivo do banco |

## A tarefa

| Campo           | Tipo           | Regras                                                     |
| --------------- | -------------- | ---------------------------------------------------------- |
| `id`            | número         | Gerado pela API                                            |
| `titulo`        | texto          | Obrigatório                                                |
| `descricao`     | texto          | Opcional, padrão `""`                                      |
| `prioridade`    | texto          | `baixa`, `media` ou `alta`. Padrão `media`                 |
| `status`        | texto          | `a_fazer`, `em_andamento` ou `concluida`. Padrão `a_fazer` |
| `responsavel`   | texto ou null  | Quem vai fazer. Padrão `null`                              |
| `criado_em`     | data (ISO UTC) | Gerado pela API                                            |
| `atualizado_em` | data (ISO UTC) | Atualizado pela API a cada alteração                       |

## Rotas

| Método   | Rota           | O que faz                                    | Sucesso |
| -------- | -------------- | -------------------------------------------- | ------- |
| `GET`    | `/tarefas`     | Lista as tarefas                             | 200     |
| `GET`    | `/tarefas/:id` | Busca uma tarefa                             | 200     |
| `POST`   | `/tarefas`     | Cria uma tarefa                              | 201     |
| `PUT`    | `/tarefas/:id` | Substitui a tarefa inteira                   | 200     |
| `PATCH`  | `/tarefas/:id` | Altera só os campos enviados                 | 200     |
| `DELETE` | `/tarefas/:id` | Apaga uma tarefa                             | 204     |
| `GET`    | `/quadro`      | Tarefas agrupadas por status, como um kanban | 200     |

A lista aceita filtros, que podem ser combinados:

```
GET /tarefas?status=a_fazer&prioridade=alta&responsavel=Ana
```

No `PUT`, o que não for enviado volta para o valor padrão. No `PATCH`, o que não for enviado fica como estava.

## Exemplos

Criar uma tarefa:

```bash
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Estudar SQL", "prioridade": "alta", "responsavel": "Ana"}'
```

```json
{
  "id": 5,
  "titulo": "Estudar SQL",
  "descricao": "",
  "prioridade": "alta",
  "status": "a_fazer",
  "responsavel": "Ana",
  "criado_em": "2026-11-13T21:13:22Z",
  "atualizado_em": "2026-11-13T21:13:22Z"
}
```

Mover a tarefa para outra coluna:

```bash
curl -X PATCH http://localhost:3000/tarefas/5 \
  -H "Content-Type: application/json" \
  -d '{"status": "em_andamento"}'
```

Ver o quadro:

```bash
curl http://localhost:3000/quadro
```

```json
{
  "a_fazer": [],
  "em_andamento": [{ "id": 5, "titulo": "Estudar SQL", "...": "..." }],
  "concluida": []
}
```

Dentro de cada coluna, as tarefas de prioridade alta vêm primeiro.

Apagar a tarefa:

```bash
curl -X DELETE http://localhost:3000/tarefas/5
```

## Erros

Todo erro volta como JSON com o campo `erro`. Erros de validação trazem também a lista `detalhes`.

| Código | Quando acontece                                        |
| ------ | ------------------------------------------------------ |
| 400    | Dados inválidos, JSON malformado ou id que não é número |
| 404    | Tarefa ou rota não encontrada                          |
| 500    | Erro inesperado no servidor                            |

```json
{
  "erro": "Dados inválidos.",
  "detalhes": ["\"titulo\" é obrigatório."]
}
```

## Onde está cada coisa

| Arquivo            | Conteúdo                                              |
| ------------------ | ----------------------------------------------------- |
| `src/server.js`    | Sobe o servidor, CORS e tratamento de erros           |
| `src/tarefas.js`   | As rotas do CRUD e do quadro                          |
| `src/validacao.js` | Validação do corpo das requisições                    |
| `src/db.js`        | Conexão com o SQLite, criação da tabela e dados de exemplo |
