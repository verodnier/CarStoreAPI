const modeloAutomovil = require('../repository/modelo_automovil');
 
// Obtener todos los modelos de automóviles
exports.findAll = (req, res) => {
  return modeloAutomovil.findAll(req, res);
};

// Obtener modelo de automóvil por identificador
exports.findById = (req, res) => {
  return modeloAutomovil.findById(req, res);
};

// Adicionar modelo de automóvil
exports.add = (req, res) => {  
  return modeloAutomovil.add(req, res);
};

// Actualizar modelo de automóvil por identificador
exports.update = (req, res) => {
  return modeloAutomovil.update(req, res);
};

// Eliminar modelo de automóvil por identificador
exports.delete = (req, res) => {
  return modeloAutomovil.delete(req, res);
};