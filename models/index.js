// Model index
const User = require("./User");
const Score = require("./Score");

// A user has one score
User.hasOne(Score, {
  foreignKey: "id",
});

// A score belongs to one user
Score.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Score };
