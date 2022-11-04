function Person(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = "black";
 }
 Person.nation ="english"; //cannot add a new property
 let  person = new Person("sravs","yachareni",21);
 let  person1 = new Person("john","mirupala",22);
 
      console.log(person.firstName);
      console.log(person1.nation);
 