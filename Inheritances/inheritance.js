class Bmw {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

}
class ThreeSeries extends Bmw {
    constructor(make,model,year,parkingAssistEnabled) {
        super(make,model,year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }
}
class FiveSeries extends ThreeSeries {
    constructor(make,model,year,curiesAssistEnabled) {
        super(make,model,year);
        this.curiesAssistEnabled = curiesAssistEnabled;
    }
}
let threeSeries = new ThreeSeries("Bmw",234,2013,true);
let fiveSeries = new FiveSeries("bmw",455,2018,true);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
console.log(fiveSeries.curiesAssistEnabled);