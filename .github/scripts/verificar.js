// Verifica se o código base do trabalho está consistente.
// Roda no CI (GitHub Actions) e também no computador: node .github/scripts/verificar.js
// Não usa nenhuma biblioteca, só o Node.

const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

const problemas = [];

// 1. O HTML precisa carregar o CSS e o JS.
if (!html.includes('href="style.css"')) problemas.push('index.html não carrega o "style.css".');
if (!html.includes('src="script.js"')) problemas.push('index.html não carrega o "script.js".');

// 2. Todo id que o script.js procura precisa existir no index.html.
const idsNoHtml = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
const idsNoJs = new Set([...js.matchAll(/querySelector\("#([\w-]+)"\)/g)].map((m) => m[1]));
for (const id of idsNoJs) {
  if (!idsNoHtml.has(id)) problemas.push(`script.js usa o id "#${id}", que não existe no index.html.`);
}

// 3. Toda classe usada no HTML e no JS precisa ter um bloco no style.css.
const classes = new Set();
for (const m of html.matchAll(/\bclass="([^"]+)"/g)) m[1].split(/\s+/).forEach((c) => classes.add(c));
for (const m of js.matchAll(/className = "([^"]+)"/g)) m[1].split(/\s+/).forEach((c) => classes.add(c));
for (const m of js.matchAll(/classList\.add\("([^"]+)"\)/g)) classes.add(m[1]);
// As classes de prioridade são montadas em pedaços: "prioridade-" + tarefa.prioridade
if (js.includes('"tarefa prioridade-"')) {
  classes.delete("prioridade-");
  ["baixa", "media", "alta"].forEach((p) => classes.add("prioridade-" + p));
}
for (const classe of classes) {
  if (!classe) continue;
  const seletor = new RegExp("^\\." + classe + "(?![\\w-])", "m");
  if (!seletor.test(css)) problemas.push(`A classe ".${classe}" não tem um bloco no style.css.`);
}

// 4. O CSS precisa ter as chaves fechadas.
const semComentarios = css.replace(/\/\*[\s\S]*?\*\//g, "");
const abre = (semComentarios.match(/{/g) || []).length;
const fecha = (semComentarios.match(/}/g) || []).length;
if (abre !== fecha) problemas.push(`style.css tem ${abre} chaves "{" e ${fecha} chaves "}".`);

// 5. As funções das missões e as peças prontas precisam existir.
const funcoes = [
  "carregarLista", "adicionarTarefa", "concluirTarefa", "removerTarefa",
  "buscarTarefas", "criarTarefa", "mudarStatus", "apagarTarefa",
  "lerTitulo", "lerPrioridade", "limparFormulario",
  "mostrarAviso", "mostrarContador", "desenharTarefas",
];
for (const nome of funcoes) {
  if (!new RegExp("function " + nome + "\\(").test(js)) problemas.push(`script.js não tem a função "${nome}".`);
}

// 6. A configuração precisa existir e a API precisa usar https.
if (!/const NOME_DO_GRUPO = "/.test(js)) problemas.push('script.js não tem a constante "NOME_DO_GRUPO".');
if (!/const API_URL = "https:\/\//.test(js)) problemas.push('script.js não tem um "API_URL" começando com https://.');

if (problemas.length > 0) {
  console.error("Foram encontrados " + problemas.length + " problema(s):\n");
  for (const problema of problemas) console.error("  - " + problema);
  process.exit(1);
}

console.log(`Tudo certo: ${idsNoJs.size} ids, ${classes.size} classes e ${funcoes.length} funções conferidos.`);
