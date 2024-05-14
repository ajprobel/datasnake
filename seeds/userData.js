const { User } = require('../models');

const userdata = [
  {
    id: 1,
    first_name: 'Giorno',
    last_name: 'Giovanna',
    username: 'ggiorno',
    password: 'password1',
  },
  {
    id: 2,
    first_name: 'Hayden',
    last_name: 'McBride',
    username: 'haymcb2',
    password: 'password2',
  },
  {
    id: 3,
    first_name: 'Desirae',
    last_name: 'Solis',
    username: 'd_solis',
    password: 'password3',
  },
  {
    id: 4,
    first_name: 'Kody',
    last_name: 'Hart',
    username: 'hartko22',
    password: 'password4',
  },
  {
    id: 5,
    first_name: 'Skyler',
    last_name: 'Mercado',
    username: 'bigsky7',
    password: 'password5',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;