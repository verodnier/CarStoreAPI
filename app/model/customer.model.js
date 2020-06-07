module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('cliente', {
      cedula: {
      type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      }
    });
    
    return Customer;
  }