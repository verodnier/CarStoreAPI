const contrato = require('../repository/contrato');
 
// Obtener todos los contratos
exports.findAll = (req, res) => {
  return contrato.findAll(req, res);
};

// Obtener contrato por identificador
exports.findById = (req, res) => {
  return contrato.findById(req, res);
};

// Adicionar contrato
exports.add = (req, res) => {  
  return contrato.add(req, res);
};

// Actualizar contrato por identificador
exports.update = (req, res) => {
  return contrato.update(req, res);
};

// Eliminar contrato por identificador
exports.delete = (req, res) => {
  return contrato.delete(req, res);
};