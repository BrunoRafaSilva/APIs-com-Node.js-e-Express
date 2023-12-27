import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

//as rotas devem ser adicionadas em ordem de complexidade
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);


//ele exporta a função routes como padrão, ou seja eu posso importar ela no arquivo index.js com outro nome, apenas referenciando o arquivo atual(este)
export default routes;
