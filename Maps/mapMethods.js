let scores = new Map();
scores.set("Maths",30);
scores.set("Telugu",50);
scores.set("Physcis",80);
scores.set("chemistry",30);
scores.set("english",30);
console.log(scores.get("Maths"));
console.log(scores.get("Telugu"));
scores.delete("Telugu");
console.log(scores.get("Physcis"));
console.log(scores.get("chemistry"));
console.log(scores.get("english"));
console.log(scores.size);
console.log(scores.has("Hindhi"));

