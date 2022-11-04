function display(some) {

    console.log(some);
}
function display1(num1,num2,a) {     //display() is a function it is passed to display1() as an argument 
    a = num1 + num2;
    display(a) ;

}

display1(2,3);