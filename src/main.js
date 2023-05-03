const { db } = require("../db/connection.js");
const Pokemon = require("./model");

async function main() {
  await db.sync({ force: true });

  const Pikachu = await Pokemon.create({
    name: "Pikachu",
    type: "Electric",
    weight: 6,
  });
  console.log(JSON.stringify(Pikachu, null, 2));
  await Pokemon.bulkCreate([
    {
      name: "Bulbasaur",
      type: "Grass/Poison",
      weight: 6.9,
    },
    {
      name: "Charmander",
      type: "Fire",
      weight: 8.5,
    },
    {
      name: "Squirtle",
      type: "Water",
      weight: 9,
    },
  ]);

  const currentPokemon = await Pokemon.findOne({ where: { name: "Pikachu" } });
  console.log(JSON.stringify(currentPokemon, null, 2));
  const allPokemon = await Pokemon.findAll();
  console.log(JSON.stringify(allPokemon, null, 2));

  const updateResult = await Pokemon.update(
    { name: "Ivysaur", weight: 13 },
    { where: { name: "Bulbasaur" } }
  );
  console.log(updateResult);

  const deleteResult = await Pokemon.destroy({ where: { name: "Squirtle" } });
  console.log(deleteResult);
}

main();
