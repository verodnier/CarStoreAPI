module.exports = function(app) {
    
    var cliente = require('../services/cliente');
    
    // Obtener todos los clientes
    app.get('/api/clientes', cliente.findAll);
 
    // Obtener cliente por identificador
    app.get('/api/cliente/:id', cliente.findById);
 
    // Actualizar cliente por identificador
    app.put('/api/cliente/:id', cliente.update);

    // Adicionar nuevo cliente
    app.post('/api/cliente', cliente.add);
 
    //Eliminar cliente por identificador
    app.delete('/api/cliente/:id', cliente.delete);
}