module.exports = function(app) {
 
    var customers = require('../controllers/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customers/:id', customers.findById);
 
    // Actualizar cliente por identificador
    app.put('/api/customers/:id', customers.update);
 
    //Eliminar cliente por identificador
    app.delete('/api/customers/:id', customers.delete);
}