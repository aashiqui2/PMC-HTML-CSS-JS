const superHeros = ["IronMan", "SpiderMan", "SuperMan"];

const person = {
  name: "IronMan",
  age: 35,
  isAvenger: true,

  power: ["billionaire", "Handsome", "Brilliant"],
};

const people = [
  { name: "IronMan", age: 35, isAvenger: true },
  { name: "SpiderMan", age: 21, isAvenger: true },
  { name: "SuperMan", age: 35, isAvenger: false },
];

// stringify()
const jsonStr = JSON.stringify(superHeros);
const jsonStr1 = JSON.stringify(person);
const jsonStr2 = JSON.stringify(people);

// parse()
const strJson = JSON.parse(jsonStr);
const strJson1 = JSON.parse(jsonStr1);
const strJson2 = JSON.parse(jsonStr2);

console.log(superHeros);
console.log(jsonStr);
console.log(strJson);

console.log(person);
console.log(jsonStr1);
console.log(strJson1);

console.log(people);
console.log(jsonStr2);
console.log(strJson2);
