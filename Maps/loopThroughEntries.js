let scores = new Map();
scores.set("Maths",30);
scores.set("Telugu",50);
scores.set("Physcis",80);
scores.set("chemistry",30);
scores.set("english",30);
for(let values of scores.keys()) {
    console.log((values));
}
for(let values of scores.values()) {
    console.log((values));
}
for(let [key,value] of scores.entries()) {
    console.log([key,value]);
    
}