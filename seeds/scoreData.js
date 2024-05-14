const { Score } = require('../models');

const scoredata = [
  {
    id: 1,
    user_id: 1,
    score: 77,
  },
  {
    id: 2,
    user_id: 5,
    score: 323,
  },
  {
    id: 3,
    user_id: 2,
    score: 513,
  },
  {
    id: 4,
    user_id: 4,
    score: 600,
  },
  {
    id: 5,
    user_id: 3,
    score: 15,
  },
  {
    id: 6,
    user_id: 1,
    score: 120,
  },
  {
    id: 7,
    user_id: 1,
    score: 899,
  },

];

const seedScore = () => Score.bulkCreate(scoredata);

module.exports = seedScore;