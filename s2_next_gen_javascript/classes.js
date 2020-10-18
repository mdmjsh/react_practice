class Person {
    name = 'Josh'
    call = () => {}
}

// instantiate a class
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// inheritence
class Superhero extends Person {
    power = 'fly'
    doPower = () => {}
}


// inheritence example
class Human {
    constructor(){
      this.gender = 'male';
    }
      printGender(){
      console.log(this.gender);
    }
  }

  class Person extends Human {
    constructor() {
    //   need to call inheritence when parent class has a constructor
       super();
      this.name = 'Josh';
    }

    printMyName(){
      console.log(this.name);
    }
  }

  const person = new Person();
  person.printMyName();
  person.printGender();