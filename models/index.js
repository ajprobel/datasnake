// Model index
const User = require("./User");
const Score = require("./Score");

// A user has one score
User.hasMany(Score, {
  foreignKey: "user_id",
});

// A score belongs to one user
Score.belongsTo(User);

module.exports = { User, Score };
