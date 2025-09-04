console.log("Hello, Himanshu");
alert("Welcome to javascript");
// var,let,const
 let name ="Himanshu";
 let age =22;
 console.log("Name:", name);
 console.log("Age:",age);
//  operators&condition
let marks =85;
if(marks >= 90){
    console.log("Grade: A+");
}else if (mark >=75) {
console.log("Grade: B"); 
} else {
    console.log("Grad: C");
}
// LOOPS
for (let i=1; i<=5; i++) {
    console.log("Number:", i);
}
// Functions
function great(name) {
    console.log("Hello, " + name);
}
console.log(great("Himanshu"));
// Arrays
let fruits =["apple","banana"];
console.log(fruits[1]);
 let user = {name:"Himanshu",age:22};
console.log(user.name);
// DOM Manipulation
// The following code should be placed in an HTML file, not in a JS file.
// To manipulate the DOM, use only JavaScript here, for example:

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('msg').innerText = "Welcome, Himanshu!";
    document.getElementById('btn').addEventListener('click', function() {
        alert("hi himanshu!");
    });
});