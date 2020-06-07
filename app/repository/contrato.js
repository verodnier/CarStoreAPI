const db = require('../config/db.config')
const contrato = require('../models/contrato')(db.sequelize, db.Sequelize);
 
// Obtener todos los contratos
exports.findAll = (req, res) => {
  contrato.findAll().then(contrato => {
    res.send(contrato);
  });
};

// Obtener contrato por identificador
exports.findById = (req, res) => {
   contrato.findAll({
    where: {
      id: req.params.id
    }
  }).then(contrato => {
    res.send(contrato);
  });
};

// Adicionar contrato
exports.add = (req, res) => {  
  contrato.create({  
    fecha: req.body.fecha,
    idCliente: req.body.idCliente,
    numeroContrato: req.body.numeroContrato
  }).then(contrato => {    
    res.send(contrato);
  });
};

// Actualizar contrato por identificador
exports.update = (req, res) => {
  const id = req.params.id;
  contrato.update( { 
    fecha: req.body.fecha,
    idCliente: req.body.idCliente,
    numeroContrato: req.body.numeroContrato
  }, 
  { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};


// Eliminar contrato por identificador
exports.delete = (req, res) => {
  const id = req.params.id;
  contrato.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};