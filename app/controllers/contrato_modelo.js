module.exports = function(app) {
    
    var contratoModelo = require('../services/contrato');
    
    // Obtener todos los contratos_modelos
    app.get('/api/contratos_modelos', contratoModelo.findAll);
 
    // Obtener contrato_modelo por identificador
    app.get('/api/contrato_modelo/:id', contratoModelo.findById);
 
    // Actualizar contrato_modelo por identificador
    app.put('/api/contrato_modelo/:id', contratoModelo.update);

    // Adicionar nuevo contrato_modelo
    app.post('/api/contrato_modelo', contratoModelo.add);
 
    //Eliminar contrato_modelo por identificador
    app.delete('/api/cliente/:id', contratoModelo.delete);
}