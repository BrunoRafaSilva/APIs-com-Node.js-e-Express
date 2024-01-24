class ErroBase extends Error {
  //ele pegará justamente os erros de servidor, diminuindo as linhas de codigo
  constructor(messagem = "Erro interno do servidor", status = 500) {
    super();
    this.message = messagem;
    this.status = status;
  }

  enviarResposta(res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status,
    });
  }
}

export default ErroBase;
