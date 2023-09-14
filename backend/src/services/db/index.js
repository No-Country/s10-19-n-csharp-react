const { loadSeeds } = require('../../seeders');
const sequelize = require('./config');
require('./models');

const dbInitializer = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize
    .sync({ alter: true })
    // .sync({ force: true })
    .then(() => {
      // loadSeeds()
      console.log('sincronizacion completada');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { dbInitializer };
