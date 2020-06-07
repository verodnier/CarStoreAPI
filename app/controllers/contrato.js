module.exports = function(app) {
    
    var contrato = require('../services/contrato');
    
    // Obtener todos los contratos
    app.get('/api/contratos', contrato.findAll);
 
    // Obtener contrato por identificador
    app.get('/api/contrato/:id', contrato.findById);
 
    // Actualizar contrato por identificador
    app.put('/api/contrato/:id', contrato.update);

    // Adicionar nuevo contrato
    app.post('/api/contrato', contrato.add);
 
    //Eliminar contrato por identificador
    app.delete('/api/contrato/:id', contrato.delete);
}