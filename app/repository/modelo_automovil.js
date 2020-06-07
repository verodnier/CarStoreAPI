const db = require('../config/db.config')
const modeloAutomovil = require('../models/modelo_automovil')(db.sequelize, db.Sequelize);
 
// Obtener todos los modelos de automóviles
exports.findAll = (req, res) => {
  modeloAutomovil.findAll().then(cliente => {
    // Send all customers to Client
    res.send(cliente);
  });
};

// Obtener modelo de automóvil por identificador
exports.findById = (req, res) => {
   modeloAutomovil.findAll({
    where: {
      id: req.params.id
    }
  }).then(cliente => {
    res.send(cliente);
  });
};

// Adicionar modelo de automóvil
exports.add = (req, res) => {  
  modeloAutomovil.create({  
    cantidad: req.body.cantidad,
    capacidad: req.body.capacidad,
    consumoCombustible: req.body.consumoCombustible,
    garantia: req.body.garantia,
    modelo: req.body.modelo,
    marca: req.body.marca,
    fabricante: req.body.fabricante,
    precio: req.body.precio
  }).then(cliente => {    
    res.send(cliente);
  });
};

// Actualizar modelo de automóvil por identificador
exports.update = (req, res) => {
  const id = req.params.id;
  modeloAutomovil.update( { 
    cantidad: req.body.cantidad,
    capacidad: req.body.capacidad,
    consumoCombustible: req.body.consumoCombustible,
    garantia: req.body.garantia,
    modelo: req.body.modelo,
    marca: req.body.marca,
    fabricante: req.body.fabricante,
    precio: req.body.precio
  }, 
  { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};


// Eliminar modelo de automóvil por identificador
exports.delete = (req, res) => {
  const id = req.params.id;
  modeloAutomovil.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};