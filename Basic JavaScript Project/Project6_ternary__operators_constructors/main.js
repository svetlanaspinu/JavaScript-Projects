function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride!";
}

document.write("br")

// Ternary Operation Challenge
function Vote_Function() {
    var Age1, Age2;
    Age1 = document.getElementById("Age").value;
    Age2 = (Age1 > 18) ? "You can " : "You are not old enough to";
    document.getElementById("Vote").innerHTML = Age2 + " vote!";
}

function Vote_Function() {
    var Age1, Age2;
    Age1 = document.getElementById("Age").value;
    Age2 = (Age1 > 18) ? "You can " : "You are not old enough to";
    document.getElementById("New_and_This").innerHTML = Age2 + " vote!";
}

// Nested Function
function Nested_Function() {
    document.getElementById("Counting").innerHTML = Stop() ;
    function Stop(){
        var start = 4;
        function Walk(){Stop += 6;}
        Walk();
        return start
    }
}

// Constructor  and using this and new keywords.
function Names(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const Tom = new Names("Tom", "Holland", 23, "blue");
  const Bella = new Names("Bella", "Flower", 29, "green");

  document.getElementById("Const").innerHTML ="Tom is" + Tom.age + ", and Bella is" + Bella.age +".";
