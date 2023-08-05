function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride!";
}

document.write("br")

// Ternary Operatoe Challenge
function Vote_Function() {
    var Age1, Age2;
    Age1 = document.getElementById("Age").value;
    Age2 = (Age1 > 18) ? "You can " : "You are not old enough to";
    document.getElementById("Vote").innerHTML = Age2 + " vote!";
}