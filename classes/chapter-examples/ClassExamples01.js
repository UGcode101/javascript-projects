//Try adding new properties inside constructor.
class Astronaut {
  constructor(name, age, mass, hairstyle) {
    this.name = name;
    this.age = age;
    this.mass = mass;
    this.hairstyle = hairstyle;
  }
}

let fox = new Astronaut("Fox", 7, 12, "Buzzcut");

console.log(fox);
console.log(fox.age, fox.color, fox.mass, fox.hairstyle);

fox.age = 9;
fox.color = "red";
fox.mass = 500;
fox.hairstyle = "frazzled";

console.log(fox);
console.log(fox.age, fox.color);
console.log(fox.mass, fox.hairstyle);

//Try modifying or adding properties below.
