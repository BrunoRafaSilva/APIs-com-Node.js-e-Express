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
  editora: { type: String, required: [true, "A editora é obrigatorio."] },
  numeroPaginas: { type: Number },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
