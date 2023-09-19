import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    name: chance.name(),
    age: chance.age(),
    gender: chance.gender(),
    adress: chance.address(),
    city: chance.city(),
    country: chance.country(),
    phone: chance.phone(),
  };
  response.status(200).json(character);
}
