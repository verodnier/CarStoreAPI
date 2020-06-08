module.exports = function(app) {
    require('./cliente')(app);
    require('./modelo_automovil')(app);
    require('./contrato')(app);
    require('./contrato_modelo')(app);
}