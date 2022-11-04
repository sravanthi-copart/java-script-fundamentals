async function display() {
    let myPromise = new Promise(function(resolve,reject){
        resolve("I like dogs");
    });
    console.log(await myPromise);
}
display();