import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "O titulo do livro é obrigatório."],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório."],
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatorio."],
    enum: {
      values: ["Casa do código", "Alura", "Inundo"],
      message: "A editora {VALUE} está fora dos parametros definidos.",
    }, //torno obrigatorio ter casa do codigo ou alura no campo editora que será enviado
  },
  numeroPaginas: {
    type: Number,
    min: [
      10,
      "O número de páginas deve estar entre 10 e 500. Valor fornecido: {VALUE}",
    ],
    max: [
      5000,
      "O número de páginas deve estar entre 10 e 500. Valor fornecido: {VALUE}",
    ],
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
