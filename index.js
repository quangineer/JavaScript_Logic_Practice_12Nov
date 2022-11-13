//define greeting variable
let greeting = "";
let age = "";
let situation = "";
let school = "";

//ref display paragraph
let greeting1 = document.getElementById("firstGreeting");
let greeting2 = document.getElementById("secondGreeting");
let greeting3 = document.getElementById("thirdGreeting");
let greeting4 = document.getElementById("fourthGreeting");

//define 1st function
function displayFirstGreeting(){
    let name = document.getElementById("userName").value;
    greeting = "Good Day " + name;
    greeting1.innerHTML = greeting;
}

//define 2nd function
function displaySecondGreeting(){
    let name = document.getElementById("Age").value;
    age = "You are " + name;
    greeting2.innerHTML = age;
}

//define 3rd function
function displayThirdGreeting(){
    let name = document.getElementById("Status").value;
    situation = name + " !!!";
    greeting3.innerHTML = situation;
}

//define 4th function
function displayFourthGreeting(){
    let name = document.getElementById("college").value;
    school = "I am offered by " + name;
    greeting4.innerHTML = school; 
}

//call 1st function
let button1 = document.getElementById("userNameButton");
button1.onclick = function() {displayFirstGreeting(greeting1.innerHTML);} 

//call 2nd function
let button2 = document.getElementById("ageButton");
button2.onclick = function() {displaySecondGreeting(greeting2.innerHTML);}

//call 3rd function
let button3 = document.getElementById("statusButton");
button3.onclick = function() {displayThirdGreeting(greeting3.innerHTML);}

//call 4th function
let button4 = document.getElementById("collegeButton");
button4.onclick = function() {displayFourthGreeting(greeting4.innerHTML);}

