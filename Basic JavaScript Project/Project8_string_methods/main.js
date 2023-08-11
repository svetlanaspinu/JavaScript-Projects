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


