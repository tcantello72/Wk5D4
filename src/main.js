// 6. change imports to compensate for new export structure from models folder and remove the db import
const { Pokemon, Trainer, Badge } = require("./models");

async function main() {
  // 7. empty main function and store all entires for each table in constants at the top of main, this is for ease of use
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();

  // 8. demonstrate adding one pokemon to a trainer, followed by adding many
  await trainers[0].addPokemon(pokemon[0]);
  await trainers[0].addPokemons([pokemon[1], pokemon[2]]);

  // 9. run a findOne on this trainer without eager loading to demonstrate the lack of pokemon information, then run a second search with eager loading
  const trainer = await Trainer.findOne({ where: { name: "Red" } });
  console.log(JSON.stringify(trainer, null, 2));
  const trainerWithPokemon = await Trainer.findOne({
    where: {
      name: "Red",
    },
    include: Pokemon,
  });
  console.log(JSON.stringify(trainerWithPokemon, null, 2));

  // 10. demonstrate adding badges to two different trainers, followed by an eager loading search
  await trainers[0].addBadge(badges[0]);
  await trainers[1].addBadge(badges[0]);
  const trainersWithBadges = await Trainer.findAll({ include: Badge });
  console.log(JSON.stringify(trainersWithBadges, null, 2));
}

main();
