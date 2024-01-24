import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";



const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O senhor dos aneis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

//criação da função para buscar o livro
function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

//resposta padrão quando tentamos acessar a api no navegador ou apenas dando get na uri
app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

//retorna todos os livros cadastrados
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

//procura um livros especifico pelo 'id' utilizando a função criada no trecho de código acima
app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

//método POST para adicionar um livros para a lista
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

//método PUT para alterar titulo de um livro
app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

//método DELETE para remover um livro especifico passando seu id.
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(201).send("Livro removido com sucesso!");
});

export default app;
