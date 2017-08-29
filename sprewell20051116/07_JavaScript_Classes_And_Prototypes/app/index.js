console.log("Subject 07 Class 55 Define classes");
// Class 56, Move to Animal.js for moduling
// class Animal {
//   // constructor, to init class member
//   constructor(name, height) {
//     this.name = name;
//     this.height = height;
//   }
//
//   hello() {
//     console.log(`Hi, I'm ${this.name} from the Animal Kingdom`);;
//   }
// }
// Class 56, Move to Animal.js for moduling
import Animal from './Animal';

// let king = new Animal();
let king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();

console.log("Subject 07 Class 56 Inheriting classes");
class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }

  hello() {
    console.log(`Hi, I'm ${this.name} from Pride Rock`);
  }
}

let son = new Lion("Simba", 2, "golden");
console.log(son);
son.hello();

console.log("Subject 07 Class 57 Static Methods");
// 關鍵字 static 定義一個靜態的方法(method)給類別(class).
// 靜態方法不須實例化(instantiating)其類別即可被呼叫，
// 但當類別被實例化(instantiating)後則靜態方法不能被呼叫。
// 靜態方法常被使用在建立應用程式的工具函式(utility functions)。
// 像是 class method 吧
class Calculator{
  static multiply(a, b) {
    return a * b;
  }
  static add(a, b) {
    return a + b;
  }
}

let a = Calculator.multiply(5, 7);
console.log(a); // 5 * 7 = 35
let b = Calculator.add(5, 7);
console.log(b); // 5 + 7 = 12

// exercise 6 Fender Bender (Classes)
class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Guitar extends Instrument {
  describe() {
    // super.Instrument(name, type);
    return `I'm a ${this.name} from the ${this.type} family.`;
  }
}

let fender = new Guitar("Fender", "strings");
console.log(fender.describe());

console.log("Subject 07 Class 60 Static Methods");
function Wizards (name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`;
}

Wizards.prototype.pet_name;
Wizards.prototype.info = function() {
  return `I have a ${this.pet} name ${this.pet_name}`
};
let Harry = new Wizards("Harry Potter", "Gryffindor", "Owl");
Harry.pet_name = "Hedwig"
console.log(Harry);
console.log(Harry.greet());
console.log(Harry.info());
