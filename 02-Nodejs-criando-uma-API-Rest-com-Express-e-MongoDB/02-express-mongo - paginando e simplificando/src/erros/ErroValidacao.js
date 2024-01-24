import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    //console.log(erro.errors);
    const mesagensErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mesagensErro}`);
  }
}

export default ErroValidacao;
