import mongoose from "mongoose";

//estou definindo uma propriedade para todos os campos do tipo string / primeiro o nome da propeidade e depois os valores (objetos)
mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`, //não é necessário a arrowfunction
});
