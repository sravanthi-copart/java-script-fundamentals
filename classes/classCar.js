class Car {
    constructor(year,model){
        this.year = year;
        this.model = model;
    }
    age() {
        let date = new Date();
               return  date.getFullYear() - this.year;
    }
}
let car = new Car(2001,"shift");
console.log(car.model + "age is "+ car.age());