
const db = require('../config/db.config')
const cliente = require('../models/cliente')(db.sequelize, db.Sequelize);
 
// Obtener todos los clientes
exports.findAll = (req, res) => {
  cliente.findAll().then(cliente => {
    res.send(cliente);
  });
};

// Obtener cliente por identificador
exports.findById = (req, res) => {
   cliente.findAll({
    where: {
      id: req.params.id
    }
  }).then(cliente => {
    res.send(cliente);
  });
};

// Obtener clientes por nombre y cédula
exports.findByNameCedula = (req, res) => {
  cliente.findAll({
   where: {
     nombre: req.params.nombre,
     cedula: req.params.cedula
   }
 }).then(cliente => {
   res.send(cliente);
 });
};

// Adicionar cliente
exports.add = (req, res) => { 
  cliente.create({  
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    cuentaBancaria: req.body.cuentaBancaria,
    email: req.body.email,
    direccionPostal: req.body.direccionPostal
  }).then(cliente => {    
    res.send(cliente);
  });
};

// Actualizar cliente por identificador
exports.update = (req, res) => {
  const id = req.params.id;
  cliente.update( { 
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    cuentaBancaria: req.body.cuentaBancaria,
    email: req.body.email,
    direccionPostal: req.body.direccionPostal
  }, 
  { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("updated successfully a customer with id = " + id);
  });
};


// Eliminar cliente por identificador
exports.delete = (req, res) => {
  const id = req.params.id;
  cliente.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};