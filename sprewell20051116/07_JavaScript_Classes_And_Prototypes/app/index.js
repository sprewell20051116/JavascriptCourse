console.log("Subject 07");
class Animal {
  // constructor, to init class member
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`Hi, I'm ${this.name} from the Animal Kingdom`);;
  }
}

// let king = new Animal();
let king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();
