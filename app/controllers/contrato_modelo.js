module.exports = function(app) {
    
    var contrato = require('../services/contrato');
    
    // Obtener todos los contratos_modelos
    app.get('/api/contratos_modelos', contrato.findAll);
 
    // Obtener contrato_modelo por identificador
    app.get('/api/contrato_modelo/:id', contrato.findById);
 
    // Actualizar contrato_modelo por identificador
    app.put('/api/contrato_modelo/:id', contrato.update);

    // Adicionar nuevo contrato_modelo
    app.post('/api/contrato_modelo', contrato.add);
 
    //Eliminar contrato_modelo por identificador
    app.delete('/api/cliente/:id', contrato.delete);
}