module.exports = (sequelize, Sequelize) => {
    const contrato = sequelize.define('contrato', {
        fecha: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
          
        idCliente: {
            type: Sequelize.BIGINT,
            allowNull: false,
            field: "id_cliente",
            primaryKey: true
        },

        numeroContrato: {
            type: Sequelize.STRING,
            field: "numero_contrato",
            allowNull: true
        }

    });
    
    return contrato;
}