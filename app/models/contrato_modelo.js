module.exports = (sequelize, Sequelize) => {
    const contratoModelo = sequelize.define('contratoModelo', {
        cantModelo: {
            type: Sequelize.BIGINT,
            field: "cant_modelo",
            allowNull: false
        },

        idContrato: {
            type: Sequelize.BIGINT,
            field: "id_contrato",
            allowNull: false,
            primaryKey: true
        },

        idModelo: {
            type: Sequelize.BIGINT,
            field: "id_modelo",
            allowNull: false,
            primaryKey: true
        }

    },
    {
        tableName: 'contrato_modelo'
    });
    
    return contrato;
}