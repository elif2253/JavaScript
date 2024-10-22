//console.log('Hello!');
//window.alert('This is an alert');
/*
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Welcome ${username}`;
}
*/
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countlabel = document.getElementById("countLabel");

let counter = 0;

increaseBtn.onclick = function(){
    counter++;
    countlabel.textContent = counter;
}

decreaseBtn.onclick = function(){
    counter--;
    countlabel.textContent = counter;
}

resetBtn.onclick = function(){
    counter = 0;
    countlabel.textContent = counter;
}


/*
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value ;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
*/

//document.getElementById("myH1").textContent = "what is happening";
//document.getElementById("myP").textContent = "This is an paragraf.";
/*
let age= 23;
let price = 10.25;
let gpa = 3.47;
console.log(`Your age is ${age}`);
console.log(`This one is only ${price} euros.`);
console.log(`My final gpa is ${gpa}`);
*/

/*let catName = 'Bella';
let myGmail = 'bella84@gmail.com'
console.log(`Your cat name was ${catName} right? `);
console.log(`My business gmail is ${myGmail} `);
*/
/*
let isOnline = true;
let forSale = false;
console.log(`Bella is online : ${isOnline}`);
console.log(`This house is for sale : ${forSale}`);
*/
/*
let name = "Mia";
let age = 27;
let isStudent = false;

document.getElementById("p1").textContent = `Her name is ${name}`;
document.getElementById("p2").textContent = `Her age is ${age}`;
document.getElementById("p3").textContent = `She is a student right? : ${isStudent}`;
*/
