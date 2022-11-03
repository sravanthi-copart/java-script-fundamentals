let courses = new Set();
courses.add("Angular");
courses.add("Spring");
courses.add("Java");
for(const values of courses ) {
    console.log(values);
    
}
console.log(courses.size);
console.log(courses.has("React"));
let fruits = new Set(["apple","banana","mango"]);
for(const values of fruits ) {
    console.log(values);
    
}
