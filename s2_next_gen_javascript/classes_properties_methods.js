// alternative, more modern version (es&7) of class, property and method syntax.
// no need for constructor method

class Human {
    // no constructor
    gender = 'male'
    // use arrow func to set method as a variable
    printGender = () => {
      console.log(this.gender);
    }
  }

