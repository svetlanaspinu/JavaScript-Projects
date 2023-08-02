function my_Function() {
    var addition = 10 +10 ;
    document.getElementById("Math").innerHTML = "10 + 10 = " + addition; 

}

function my2_Function() {
    var substraction = 20 - 10 ;
    document.getElementById("Math").innerHTML = "20 - 10 = " + substraction; 
}

function multiplication() {
    var multiply = 20 * 10 ;
    document.getElementById("Math").innerHTML = "20 * 10 = " + multiply; 
}

function division() {
    var divide = 20 / 10 ;
    document.getElementById("Math").innerHTML = "20 / 10 = " + divide; 
}

function More_Math() {
    var simple_Math = ( 5 + 5 ) * 10  / 2 -10;
    document.getElementById('Math').innerHTML = "5 plus 5, multiply by 10, devided in half and then substracted by 10 equals " + simple_Math;
}

function modulus_operator() {
    var modulus = 60 % 9; 
    document.getElementById("Math").innerHTML = "When divided 60 by 9 we have a reminder of " + modulus; 
}

function negation_operator() {
    var negative = 50;
    document.getElementById("Math").innerHTML = - negative;
}
