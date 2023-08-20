function Call_Loop() {
    var colors = " ";
    var strong = 77;
    while (strong < 77) {
        colors += "<br>" + strong;
        strong ++;
    }
    document.getElementById("looping").innerHTML = colors;
}

// using For Loop
var Countries = ["France", "Spain", "Greece", "Poland", "Albania", "Georgia"];
var Content = "";
var X;

function Countries_names() {
    for (X=0; X < Countries.length; X++ ) {
        Content += Countries[X] + "<br>";
    }
    document.getElementById("Countries").innerHTML = Content;

}

// using Array
function Array_Function() {
    var Forecast = [];
    Forecast[0] = "raining";
    Forecast[1] = "sunny";
    Forecast[2] = "windy";
    Forecast[3] = "snowing";
    document.getElementById("Array").innerHTML = "The weather is amazing. Today is " + Forecast[1] + "."
}

// using const keyword

function Constant_function() {
    const Soup_ofthe_day = {soup_1:"tomato soup", soup_2:"carrot soup",soup_3:"mushroom soup"};
    Soup_ofthe_day.price = "3£";
    Soup_ofthe_day.quantity = "300ml";
    document.getElementById("Constant").innerHTML = "Soup of the day is " + Soup_ofthe_day.soup_1 + ", and price is " + Soup_ofthe_day.price + ".";
}