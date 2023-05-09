const { db } = require("../db/connection.js");
const { Pokemon, Trainer, Badge }  = require("./models");

async function main() {

  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();

  await trainers[0].addPokemon(pokemon[0]);
  await trainers[0].addPokemon([pokemon[1], pokemon[2]]);

  const trainer = await Trainer.findOne({ where: {name: "Red"} });
  //console.log(JSON.stringify(trainer, null, 2));

  const trainerWithPokemon = await Trainer.findOne({ where: {name: "Red"}, include: Pokemon });
  //console.log(JSON.stringify(trainerWithPokemon, null, 2));

  await trainers[0].addBadge(badges[0]);
  await trainers[1].addBadge(badges[0]);

  const trainerWithBadges = await Trainer.findAll({include: Badge});
  //console.log(JSON.stringify(trainerWithBadges, null, 2));

  //magic methods on what you can do with models use npm start
  //console.log(trainers[0].__proto__)
  //console.log(pokemon[0].__proto__)
  //console.log(badges[0].__proto__)

}

main();
