const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

const models = require('./models')

// const init = async () => {
//   await models.sync({force: true}) // force true will drop the table if it already exists
//   console.log('Tables have synced!')
// }

// init()


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Serving listeng on ${PORT}`);
})

app.use(express.static('../client/src/index.html'));

module.exports = {
  app,
};