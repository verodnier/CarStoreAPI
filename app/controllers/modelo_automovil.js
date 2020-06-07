module.exports = function(app) {
        
    var modeloAutomovil = require('../services/modelo_automovil');
    
    // Obtener todos los modelos de automóviles
    app.get('/api/modelos_automoviles', modeloAutomovil.findAll);
 
    // Obtener modelo de automóvil por identificador
    app.get('/api/modelo_automovil/:id', modeloAutomovil.findById);

    // Adicionar nuevo modelo de automóvil
    app.post('/api/modelo_automovil', modeloAutomovil.add);
 
    // Actualizar modelo de automóvil por identificador
    app.put('/api/modelo_automovil/:id', modeloAutomovil.update);
 
    //Eliminar modelo de automóvil por identificador
    app.delete('/api/modelo_automovil/:id', modeloAutomovil.delete);
}