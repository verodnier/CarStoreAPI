module.exports = (sequelize, Sequelize) => {
    const modeloAutomovil = sequelize.define('modeloAutomovil', {
        cantidad: {
            type: Sequelize.BIGINT,
            allowNull: false 
        },

        capacidad: {
          type: Sequelize.INTEGER,
          allowNull: false 
        },

        consumoCombustible: {
            type: Sequelize.REAL,
            field: "consumo",
            allowNull: false
        },

        garantia: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        modelo: {
            type: Sequelize.STRING,
            allowNull: true
        },

        marca: {
            type: Sequelize.STRING,
            allowNull: true
        },

        fabricante: {
            type: Sequelize.STRING,
            allowNull: true
        },

        precio: {
            type: Sequelize.REAL,
            allowNull: true
        }

    },
    {
        tableName: 'modelo_automovil'
    });
    
    return modeloAutomovil;
}