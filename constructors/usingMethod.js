function Student(name,college,branch) {
    this.name = name;
    this.college = college;
    this.branch = branch;
    this.display = function() {
        console.log(this.name);
        console.log(this.college);
        console.log(this.branch);
    }
}
    let student  = new Student("jhon","sphn","cse");
    student.display();
 