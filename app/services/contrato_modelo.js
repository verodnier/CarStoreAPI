const contratoModelo = require('../repository/contrato_modelo');
 
// Obtener todos los contratos_modelos
exports.findAll = (req, res) => {
  return contratoModelo.findAll(req, res);
};

// Obtener contrato_modelo por identificador
exports.findById = (req, res) => {
  return contratoModelo.findById(req, res);
};

// Adicionar contrato_modelo
exports.add = (req, res) => {  
  return contratoModelo.add(req, res);
};

// Actualizar contrato_modelo por identificador
exports.update = (req, res) => {
  return contratoModelo.update(req, res);
};

// Eliminar contrato_modelo por identificador
exports.delete = (req, res) => {
  return contratoModelo.delete(req, res);
};