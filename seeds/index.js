const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedScore = require('./scoreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedScore();

  process.exit(0);
};

seedAll();