// Global Variable
var a = "apples";
function Fruit(){
    document.write("Anna's favorite fruits are " + a + ".");
}

function Fruit_2() {
    document.write("Emmy's favorite fruits are " + a + " too.");
}

Fruit();
document.write("<br>");
Fruit_2();

document.write("<br>");
// Local Variable 
function Local() {
    var b = "kiwi";
    document.write("Ella loves " + b + ".");
}

function Local_2() {
    document.write("John loves " + b + ".");
}
Local();
Local_2();

// using console.long - access using ctrl+shift+J
function Local() {
    var b = "kiwi";
    console.log("Ella loves " + b + ".");
}

function Local_2() {
    console.log("John loves " + b + ".");
}
Local();
Local_2();
document.write("<br>");

// Method Assignement
function Time() {
    const a = new Date();
    document.getElementById("time").innerHTML = "Today is " + a;
}

// using if statement
function Statement() {
    x = 2;
    y = 4;
    if (x < y) {
        alert("Hello");
    }
}

// using else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 10) {
        Icecream = "You can not have free icecream!";
    }
    else {
        Icecream = "Free icecream for you!";
    }
    document.getElementById("Your_Age").innerHTML = Icecream;
}

// Else If Statement

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 ==Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


