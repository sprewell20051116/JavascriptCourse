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

export default Animal; 
