"use strict";
const isCpfValido = require("../utils/validaCpfHelper.js");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docente_id",
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        scope: { status: "matriculado" },
        as: "aulasMatriculadas",
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30] /* definido valor minimo e valor mmáximo*/,
            msg: " O campo nome deve ter no minimo 3 caracteres.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: { args: true, msg: "formato do email inválido" } },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          cpfEValido: (cpf) => {
            if (!isCpfValido(cpf)) throw new Error("numero de CPF inválido");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
      paranoid: true,
      defaultScope: {
        where: { ativo: true },
      },
      scopes: {
        //criado um escopo alternativo
        todosOsRegistros: { where: {} },
      },
    }
  );
  return Pessoa;
};
