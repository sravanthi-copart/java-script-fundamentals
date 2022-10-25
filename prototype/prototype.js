function Person(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = "black";
 }
 Person.prototype.nationality = "English"; // Prototype allows you to add new methods to constructors
 let  person = new Person("sravs","yachareni",21);
 let  person1 = new Person("john","mirupala",22);
 
      console.log(person.firstName);
      console.log(person1.firstName);
      console.log(person1.nationality);
 