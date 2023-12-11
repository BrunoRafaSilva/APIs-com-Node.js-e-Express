import express from "express";
//como a função routes foi definida como "default", é entendido que dentro daquele arquivo há uma função generalista, que eu acabo importando ela dando outro nome e ela funciona sem problemas1
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res)=>res.status(200).send("Curso de Node.js"))
    app.use(express.json(), livros, autores)
};

export default routes