// using Boolean data type
var a = 29
document.write(a);
document.write("<br>");
// combining a string and a number
document.write("200" - 100);
document.write("<br>");

document.write(2E310);
document.write("<br>");

document.write(-3E310);
document.write("<br>");

// utilizing the > operator
document.write(20 > 100);
document.write("<br>");

// utilizing the < operator
document.write(3 < 5);
document.write("<br>");

console.log(7 + 7);
document.write("<br>");

console.log(22 > 44);
document.write("<br>");

// uitilizing the == operator
document.write(34 == 34);
document.write("<br>");
document.write(50 == 70);
document.write("<br>");

a = "apple";
a = "appple";
document.write(a === a);
document.write("<br>");

c = "bread";
d = 23;
document.write(c === d);
document.write("<br>");

e = 'grapes';
e = 'books';
document.write(e === e);
document.write("<br>");


// utilizing the && and operator
document.write(30 > 20 && 20 > 10);
document.write("<br>");
document.write(30 < 20 && 20 < 10);
document.write("<br>");

// utilizing the || or operator
document.write(30 > 40 || 40 > 30);
document.write("<br>");
document.write(1 > 2 || 2 > 3);
document.write("<br>");

// uitilizing the ! not operator
function not_Function() {
    document.getElementById("Not").innerHTML = ! (40 > 30);
}

function notTrue_Function() {
    document.getElementById("yes").innerHTML = ! (30 > 70);
}



