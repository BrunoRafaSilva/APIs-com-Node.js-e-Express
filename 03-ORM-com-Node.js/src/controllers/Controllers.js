class Controller {
  constructor(entidadeService) {
    this.entendidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro =
        await this.entendidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      //erro
    }
  }
  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        res.status(400).json({ mensagem: "Registro não foi atualizado" });
      } else {
        return res
          .status(200)
          .json({ mensagem: "Registro atualizado com sucesso" });
      }
    } catch (erro) {
      //erro
    }
  }
}

module.exports = Controller;
