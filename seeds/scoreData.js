const { Score } = require('../models');

const scoredata = [
  {
    id: 1,
    user_id: 1,
    high_score: 77,
  },
  {
    id: 2,
    user_id: 5,
    high_score: 323,
  },
  {
    id: 3,
    user_id: 2,
    high_score: 513,
  },
  {
    id: 4,
    user_id: 4,
    high_score: 600,
  },
  {
    id: 5,
    user_id: 3,
    high_score: 15,
  },

];

const seedScore = () => Score.bulkCreate(scoredata);

module.exports = seedScore;