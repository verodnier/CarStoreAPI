const db = require('../config/db.config')
const contratoModelo = require('../models/contrato_modelo')(db.sequelize, db.Sequelize);
 
// Obtener todos los contratos_modelos
exports.findAll = (req, res) => {
  contratoModelo.findAll().then(contratoModelo => {
    res.send(contratoModelo);
  });
};

// Obtener contrato_modelo por identificador
exports.findById = (req, res) => {
   contratoModelo.findAll({
    where: {
      id: req.params.id
    }
  }).then(contratoModelo => {
    res.send(contratoModelo);
  });
};

// Adicionar contrato_modelo
exports.add = (req, res) => {  
  contratoModelo.create({  
    cantModelo: req.body.cantModelo,
    idContrato: req.body.idContrato,
    idModelo: req.body.idModelo
  }).then(contratoModelo => {    
    res.send(contratoModelo);
  });
};

contrato

// Actualizar contrato_modelo por identificador
exports.update = (req, res) => {
  const id = req.params.id;
  contratoModelo.update( { 
    cantModelo: req.body.cantModelo,
    idContrato: req.body.idContrato,
    idModelo: req.body.idModelo
  }, 
  { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};


// Eliminar contrato_modelo por identificador
exports.delete = (req, res) => {
  const id = req.params.id;
  contratoModelo.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};