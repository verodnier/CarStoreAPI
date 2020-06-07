const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Obtener clientes
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    // Send all customers to Client
    res.send(customers);
  });
};



// Adicionar cliente
exports.create = (req, res) => {  
  Customer.create({  
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    cuentaBancaria: req.body.cuentaBancaria,
    email: req.body.email,
    direccionPostal: req.body.direccionPostal
  }).then(customers => {    
    res.send(customers);
  });
};

// Actualizar cliente por identificador
exports.update = (req, res) => {
  const id = req.params.id;
  Customer.update( { 
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

// Obtener cliente por identificador
exports.findById = (req, res) => {
  const id = req.params.id;
  Customer.findById( 
  { where: {id: req.params.id} }
  ).then(() => {
    res.status(200).send("get successfully a customer with id = " + id);
  });
};

// Eliminar cliente por identificador
exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a customer with id = ' + id);
  });
};