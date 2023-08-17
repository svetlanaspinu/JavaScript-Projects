// using concat() Method

function String_Method() {
    var a = "My favorite food is:" ;
    var b = "<br> 1.Cheese Pie";
    var c = "<br> 2.Sushi";
    var d = "<br>3.Roasted chicken.";
    var all_one = a.concat(b, c, d);
    document.getElementById("Concatenate").innerHTML = all_one;
}

// using slice() method
function Slice_Method() {
    var a = "Tomorrow is may day off."
    var b = a.slice(19);
    document.getElementById("Slice").innerHTML = b;
}


//using toUpperCase() method
function Upper_Case() {
    let string = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = string.toUpperCase();
}

// using serach() method
let a = "Please locate where 'locate' occurs!";
let b = a.search("locate");
document.getElementById("search").innerHTML = b;

// using toString() method
function String_method() {
    var S = 999;
    document.getElementById("string_numbers").innerHTML = S.toString();
}

// using toPrecision() method
function precision_method() {
    var P = 98.89;
    document.getElementById("precision").innerHTML = P.toPrecision(5);
}

// using toFixed() method
function Fixed_method() {
    var F = 5.65;
    document.getElementById("fixed").innerHTML = F.toFixed(10);
}

// using .Valueof() method
function value_method() {
    var V = 200;
    document.getElementById("value").innerHTML = V.valueOf();
}

