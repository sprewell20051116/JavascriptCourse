/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Animal__ = __webpack_require__(2);
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


// let king = new Animal();
let king = new __WEBPACK_IMPORTED_MODULE_0__Animal__["a" /* default */]("Mufasa", 4.5);
console.log(king);
king.hello();

console.log("Subject 07 Class 56 Inheriting classes");
class Lion extends __WEBPACK_IMPORTED_MODULE_0__Animal__["a" /* default */] {
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
class Calculator {
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
function Wizards(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`;
}
let HarryTest = new Wizards("Harry Potter", "Gryffindor", "Owl");
console.log(HarryTest.greet());

Wizards.prototype.pet_name;
Wizards.prototype.info = function () {
  return `I have a ${this.pet} name ${this.pet_name}`;
};
let Harry = new Wizards("Harry Potter", "Gryffindor", "Owl");
Harry.pet_name = "Hedwig";
console.log(Harry);
console.log(Harry.greet());
console.log(Harry.info());

// Exercise 7 Prototype a Vehicle
// TODO
// * add a 'color' field to the prototype
// * add a 'bio' method that *returns*:
//      A ${this.color} ${this.make} made in ${this.year}.

function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function () {
  return `${this.color} ${this.make} made in ${this.year}`;
};
let s = new Vehicle("Tesla", 2017);
s.color = "black";
console.log(s);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Animal);

/***/ })
/******/ ]);