import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco com sucesso");
});

const app = express();
routes(app)

//método DELETE para remover um livro especifico passando seu id.
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(201).send("Livro removido com sucesso!");
});

export default app;