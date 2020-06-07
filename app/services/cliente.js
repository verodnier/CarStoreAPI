const cliente = require('../repository/cliente');
 
// Obtener clientes
exports.findAll = (req, res) => {
  return cliente.findAll(req, res);
};

// Obtener cliente por identificador
exports.findById = (req, res) => {
  return cliente.findById(req, res);
};

// Adicionar cliente
exports.add = (req, res) => { 
    return cliente.add(req, res);
};

// Actualizar cliente por identificador
exports.update = (req, res) => {
  return cliente.update(req, res);
};

// Eliminar cliente por identificador
exports.delete = (req, res) => {
  return cliente.delete(req, res);
};