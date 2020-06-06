const env = {
    database: 'Carstore',
    username: 'postgres',
    password: 'GengisKan85',
    host: 'localhost:5432',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  