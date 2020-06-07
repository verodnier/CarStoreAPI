
module.exports = (sequelize, Sequelize) => {
    const cliente = sequelize.define('cliente', {
      cedula: {
        type: Sequelize.STRING 
      },

      nombre: {
        type: Sequelize.STRING
      },

      telefono: {
        type: Sequelize.STRING
      },
      
      cuentaBancaria: {
        type: Sequelize.STRING, 
        field: "cuenta_bancaria"
      },

      email: {
        type: Sequelize.STRING, 
      },

      direccionPostal: {
        type: Sequelize.STRING, 
        field: "direccion_postal"
      },

    });
    
    return cliente;
}