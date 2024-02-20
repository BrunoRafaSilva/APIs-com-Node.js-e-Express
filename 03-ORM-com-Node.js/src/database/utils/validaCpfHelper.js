module.exports = (cpf) => {
  if (cpf.length !== 11) return false; // CPF deve ter exatamente 11 dígitos
  return true;
};
