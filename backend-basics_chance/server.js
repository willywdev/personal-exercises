import Chance from "chance";
import { createServer } from "node:http";

const chance = new Chance();
const newPerson = {
  name: chance.name(),
  age: chance.age(),
  profession: chance.profession(),
};
const name = chance.name();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${newPerson.name}! I am ${newPerson.age} years old and work as a ${newPerson.profession}`
  );
});
