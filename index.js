function functionOne() {
    var r = confirm("Press a button!");
    if (r == true) {
        console.log("True");
    } else {
        console.log("False");
    }   
}

function functionOneRewrite(){
    var x = confirm("Press a button.")
    var txt = x ? "True": "False";
    console.log(txt);
}

function functionTwo(){
    var input = prompt("Please input a number");
    if(input == null){
        alert("You pressed cancel");
    }
    else if(isNaN(input)){
        alert("You didn't enter a number.")
    }
    else{
        alert("You entered a number good job!")
    }
}
function functionThree(first, last){
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName;
}
function functionFour(obj){
    let clone = {}
    for (let key in obj) {
        clone[key] = obj[key];
      }
    clone.newKey = "";
    return clone;
}
/*
function functionFive(a, b, c = "c"){
    return a + b + c;
}

let functionFive = function(a, b, c = "c"){
    return a + b + c;
}
*/
const functionFive = (a, b, c = "c") => a + b + c;
functionOne();
functionOneRewrite();
functionTwo();
let x = new functionThree("Scott", "Kopczynski")
let y = functionFour(x);
console.log(x);
console.log(y);
y.newKey = 22;
y.firstName = "John";
console.log(x);
console.log(y);
x.firstName = "Joe";
console.log(x);
console.log(y);
console.log(functionFive("a", "b"));
console.log(functionFive("A", "B", "C"));