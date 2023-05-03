const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");
const Badge = require("./Badge.js");

// 3. add 1:n association between Trainer and Pokemon
Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);

// 4. add m:n association between Trainer and Badge, using through table "TrainerBadges"
Trainer.belongsToMany(Badge, { through: "TrainerBadges" });
Badge.belongsToMany(Trainer, { through: "TrainerBadges" });

module.exports = {
  Pokemon,
  Trainer,
  Badge,
};
