const { Score } = require('../models');

const scoredata = [
  {
    id: 1,
    user_id: 1,
    score: 20,
  },
  {
    id: 2,
    user_id: 5,
    score: 35,
  },
  {
    id: 3,
    user_id: 2,
    score: 41,
  },
  {
    id: 4,
    user_id: 4,
    score: 50,
  },
  {
    id: 5,
    user_id: 3,
    score: 10,
  },
  {
    id: 6,
    user_id: 1,
    score: 23,
  },
  {
    id: 7,
    user_id: 1,
    score: 67,
  },

];

const seedScore = () => Score.bulkCreate(scoredata);

module.exports = seedScore;