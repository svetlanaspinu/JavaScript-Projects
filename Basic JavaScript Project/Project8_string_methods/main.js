// using concat() Method

function String_Method() {
    var a = "My favorite food is:" ;
    var b = "<br> 1.Cheese Pie";
    var c = "<br> 2.Sushi";
    var d = "<br>3.Roasted chicken.";
    var all_one = a.concat(b, c, d);
    document.getElementById("Concatenate").innerHTML = all_one;
}