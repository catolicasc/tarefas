# Trabalho em grupo: Nossa Lista de Tarefas

**Este trabalho é feito em grupo.** Cada grupo faz uma lista só e entrega um trabalho só.

Vocês vão montar uma lista de tarefas que funciona de verdade: dá para adicionar, concluir e apagar tarefas, e elas continuam salvas mesmo depois de fechar o navegador.

O trabalho tem duas partes:

- **Montar (JavaScript):** funciona como um **LEGO**. As peças já estão prontas. O papel do grupo é encaixar as peças na ordem certa.
- **Estilizar (CSS):** a estrutura da página já está pronta e as classes já estão no lugar. O grupo preenche o visual de cada classe.

## O que entregar

Uma entrega por grupo:

1. **Um vídeo curto (1 a 2 minutos)** mostrando a lista do grupo funcionando e estilizada.
2. **O nome de todos os integrantes** no rodapé da página (ele precisa aparecer no vídeo).
3. **Estrela extra (opcional):** o link de um repositório no GitHub com os arquivos do trabalho.

Dica para dividir o trabalho: enquanto uma parte do grupo monta as funções no `script.js`, a outra parte já pode ir estilizando no `style.css`. No fim, juntem os arquivos na mesma pasta.

## Os arquivos

| Arquivo      | O que é                           | O que o grupo faz nele           |
| ------------ | --------------------------------- | -------------------------------- |
| `index.html` | A estrutura da página (já pronta) | Missão 1: só trocar os textos    |
| `script.js`  | O comportamento da página         | Missões 1 a 5: montar as funções |
| `style.css`  | A aparência da página             | Missão 6: preencher as classes   |
| `README.md`  | A documentação da API de tarefas  | Só leitura, para quem tiver curiosidade |

## Como começar

1. Nesta página do GitHub, clique no botão verde **Code** e depois em **Download ZIP**.
2. Descompacte o arquivo ZIP em uma pasta do seu computador.
3. Abra a pasta no **VS Code** (menu Arquivo > Abrir Pasta).
4. Dê dois cliques no arquivo `index.html` para abrir a página no navegador.

A página vai abrir **sem visual nenhum** (letra preta, fundo branco) e com um aviso pedindo a Missão 1. É isso mesmo, está tudo certo: o visual é o grupo que vai criar.

Sempre que vocês mudarem o código: **salve o arquivo (Ctrl + S)** e **atualize a página no navegador (F5)**.

## As missões

Faça na ordem. Depois de cada missão, salve, atualize a página e confira se funcionou.

### Missão 1: coloquem o nome do grupo

- No `script.js`, escrevam o nome do grupo em `NOME_DO_GRUPO`:

  ```js
  const NOME_DO_GRUPO = "Grupo 3 - Ana, João e Bia";
  ```

- No `index.html`, troquem o texto do `<h1>` e escrevam o nome de todos os integrantes no rodapé.

**Por que o nome importa?** A turma inteira guarda as tarefas no mesmo servidor. É o nome do grupo que separa as tarefas de vocês das tarefas dos outros grupos. Escolham um nome que nenhum outro grupo vai usar, e **não mudem o nome depois de começar**: as tarefas ficam guardadas no nome antigo.

**Funcionou se:** o aviso sumiu e apareceu "Lista de: nome do grupo" embaixo do título.

### Missão 2: mostrar as tarefas

No `script.js`, completem a função `carregarLista`. As duas linhas necessárias estão escritas nos comentários da própria função.

**Funcionou se:** apareceu a mensagem "Nenhuma tarefa por aqui. Adicionem a primeira!".

### Missão 3: adicionar uma tarefa

Completem a função `adicionarTarefa` seguindo os 5 passos que estão nos comentários. Agora é com vocês: usem o manual das peças mais abaixo.

**Funcionou se:** ao digitar uma tarefa e clicar em **Adicionar**, ela aparece na lista.

### Missão 4: concluir uma tarefa

Completem a função `concluirTarefa`.

**Funcionou se:** ao clicar em **Concluir**, a tarefa vai para o fim da lista e o botão **Concluir** dela some. (Ela só vai ficar riscada depois que vocês estilizarem a classe `.concluida` na Missão 6.)

### Missão 5: apagar uma tarefa

Completem a função `removerTarefa`.

**Funcionou se:** ao clicar em **Apagar**, a tarefa some da lista.

### Missão 6: estilizem a página

Abram o `style.css`. Cada classe da página já tem um bloco vazio esperando por vocês, com dicas de quais propriedades usar:

```css
/* A caixa central, onde fica a lista inteira.
   Dicas: background, max-width, margin, padding, border-radius, box-shadow */
.cartao {

}
```

Escrevam as propriedades entre as chaves:

```css
.cartao {
  background: white;
  max-width: 560px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 12px;
}
```

**Preencham todas as classes.** As dicas são só sugestões: cores, fontes e formatos são escolha do grupo. Usem o mapa das classes e a colinha de CSS mais abaixo.

Dica: deixem algumas tarefas na lista (uma de cada prioridade e uma concluída) para enxergar o resultado enquanto estilizam.

**Funcionou se:** a página tem a cara do grupo, dá para diferenciar as três prioridades e a tarefa concluída aparece diferente das outras.

## Mapa das classes

Cada classe do `style.css` controla um pedaço da página:

```
body ................................ o fundo da página
└─ .cartao .......................... a caixa central
   ├─ .titulo-pagina ................ o título grande
   ├─ .dono ......................... "Lista de: nome do grupo"
   ├─ .formulario ................... a linha do formulário
   │  ├─ .campo ..................... o campo de texto e a prioridade
   │  └─ .botao-adicionar ........... o botão Adicionar
   ├─ .aviso ........................ a caixa de avisos
   ├─ .contador ..................... o contador (desafio opcional)
   └─ .lista ........................ a lista inteira
      ├─ .tarefa .................... cada tarefa
      │  ├─ .titulo ................. o texto da tarefa
      │  ├─ .etiqueta ............... "Baixa", "Média" ou "Alta"
      │  ├─ .botao-concluir ......... o botão Concluir
      │  └─ .botao-apagar ........... o botão Apagar
      └─ .vazio ..................... a mensagem de lista vazia
.rodape ............................. o nome dos integrantes
```

Cada tarefa também recebe sozinha uma destas classes, conforme a situação dela:

| Classe              | Quando a tarefa recebe            |
| ------------------- | --------------------------------- |
| `.prioridade-baixa` | A prioridade é baixa              |
| `.prioridade-media` | A prioridade é média              |
| `.prioridade-alta`  | A prioridade é alta               |
| `.concluida`        | A tarefa foi concluída            |

## Colinha de CSS

| Propriedade       | O que muda                         | Exemplo                               |
| ----------------- | ---------------------------------- | ------------------------------------- |
| `background`      | A cor de fundo                     | `background: #eef2f7;`                |
| `color`           | A cor do texto                     | `color: darkblue;`                    |
| `font-family`     | A fonte                            | `font-family: Arial, sans-serif;`     |
| `font-size`       | O tamanho do texto                 | `font-size: 18px;`                    |
| `font-weight`     | Texto em negrito                   | `font-weight: bold;`                  |
| `text-align`      | O alinhamento do texto             | `text-align: center;`                 |
| `text-decoration` | Texto riscado ou sublinhado        | `text-decoration: line-through;`      |
| `padding`         | O espaço por dentro                | `padding: 12px;`                      |
| `margin`          | O espaço por fora                  | `margin-bottom: 8px;`                 |
| `border`          | A borda                            | `border: 1px solid gray;`             |
| `border-left`     | Só a borda da esquerda             | `border-left: 6px solid red;`         |
| `border-radius`   | Cantos arredondados                | `border-radius: 12px;`                |
| `box-shadow`      | Sombra                             | `box-shadow: 0 4px 16px lightgray;`   |
| `max-width`       | A largura máxima                   | `max-width: 560px;`                   |
| `display: flex`   | Coloca os itens lado a lado        | `display: flex;`                      |
| `gap`             | O espaço entre os itens do flex    | `gap: 8px;`                           |
| `opacity`         | Transparência (de 0 a 1)           | `opacity: 0.5;`                       |
| `cursor`          | O formato do mouse                 | `cursor: pointer;`                    |
| `list-style`      | As bolinhas da lista               | `list-style: none;`                   |

Para escolher cores, pesquisem "seletor de cores" no Google e copiem o código (por exemplo `#2563eb`).

## Manual das peças

Estas funções já estão prontas no fim do `script.js`. É só usar.

| Peça                             | O que faz                                              | Precisa de `await`? |
| -------------------------------- | ------------------------------------------------------ | ------------------- |
| `buscarTarefas()`                | Busca as tarefas do grupo no servidor e devolve uma lista | Sim                 |
| `desenharTarefas(tarefas)`       | Mostra na tela a lista de tarefas que ela receber      | Não                 |
| `lerTitulo()`                    | Devolve o texto digitado no campo de título            | Não                 |
| `lerPrioridade()`                | Devolve a prioridade escolhida                         | Não                 |
| `criarTarefa(titulo, prioridade)`| Salva uma tarefa nova no servidor                      | Sim                 |
| `limparFormulario()`             | Apaga o que estava digitado no formulário              | Não                 |
| `mudarStatus(id, "concluida")`   | Marca a tarefa como concluída no servidor              | Sim                 |
| `apagarTarefa(id)`               | Apaga a tarefa do servidor                             | Sim                 |
| `carregarLista()`                | Busca tudo de novo e atualiza a tela (é a Missão 2)    | Sim                 |

### Como usar uma peça

Para usar uma peça, escrevam o nome dela com parênteses:

```js
limparFormulario();
```

Quando a peça **devolve** alguma coisa, guardem em uma variável:

```js
const titulo = lerTitulo();
```

### O que é o `await`?

Falar com o servidor demora um pouquinho. O `await` manda o código **esperar a resposta** antes de ir para a próxima linha. Toda peça que conversa com o servidor precisa dele:

```js
await apagarTarefa(id);
```

Se faltar o `await`, a tela pode atualizar antes de o servidor terminar, e a lista aparece desatualizada.

## O vídeo

Grave a tela do computador (1 a 2 minutos) mostrando, nesta ordem:

1. A página aberta, estilizada, com o nome do grupo e dos integrantes.
2. Duas tarefas sendo adicionadas, com prioridades diferentes.
3. Uma tarefa sendo concluída.
4. Uma tarefa sendo apagada.
5. A página sendo atualizada (F5), para mostrar que as tarefas continuam lá.

Não precisa narrar nem editar. Para gravar a tela no Windows, use **Win + Alt + R**. No Mac, use **Cmd + Shift + 5**.

## Estrela extra: publique no GitHub

Basta um integrante criar o repositório.

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.
2. Clique no **+** no canto de cima e depois em **New repository**.
3. Dê um nome (por exemplo `minha-lista-de-tarefas`), marque **Public** e clique em **Create repository**.
4. Na página que abrir, clique em **uploading an existing file**.
5. Arraste os arquivos `index.html`, `style.css` e `script.js` para a página.
6. Clique em **Commit changes**.
7. Copie o link do repositório e entregue junto com o vídeo.

## Desafio opcional

Mostre um contador em cima da lista, como "3 tarefas". Dentro de `carregarLista`, depois de buscar as tarefas, use a peça `mostrarContador`:

```js
mostrarContador(tarefas.length + " tarefas");
```

## Como será avaliado

| Item                                              | Pontos |
| ------------------------------------------------- | ------ |
| Missão 1: nome do grupo e dos integrantes na página | 1    |
| Missão 2: a lista aparece                         | 1      |
| Missão 3: adicionar funciona                      | 2      |
| Missão 4: concluir funciona                       | 1      |
| Missão 5: apagar funciona                         | 1      |
| Missão 6: página estilizada, com todas as classes preenchidas | 4 |
| **Total**                                         | **10** |
| Estrela extra: repositório no GitHub              | +1     |

## Deu problema?

| O que aconteceu                              | O que fazer                                                                 |
| -------------------------------------------- | --------------------------------------------------------------------------- |
| Mudamos o código e nada mudou                | Salvem o arquivo (Ctrl + S) e atualizem a página (F5)                       |
| O CSS não funcionou                          | Confiram se cada linha termina com `;` e se nenhuma chave `{ }` foi apagada |
| A página ficou em branco ou parou de funcionar | Aperte **F12**, clique em **Console** e leia a linha vermelha: ela diz o número da linha com erro |
| Aviso "Não consegui falar com a API"         | Confiram a internet e atualizem a página                                    |
| Clicamos em Adicionar e a tarefa não apareceu | Confiram se `carregarLista()` foi chamada no fim da função                 |
| A lista aparece desatualizada                | Faltou um `await` na frente de alguma peça                                  |
| Apareceram tarefas que não são nossas        | Outro grupo usou o mesmo nome. Combinem com o professor um nome diferente   |
| As tarefas sumiram                           | Alguém mudou o `NOME_DO_GRUPO`. Voltem para o nome que estava antes         |
