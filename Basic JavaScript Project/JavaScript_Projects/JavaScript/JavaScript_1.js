// using switch statement
function Pizza_Function() {
    var pizza;
    var Food = document.getElementById("pizza").value;
    var Food_String = " is the best pizza!";
    switch(Food) {
        case "4 Cheese":
            pizza = "4 Cheese" + Food_String;
        break;

        case "Peperoni":
            pizza = "Peperoni" + Food_String;
        break;

        case "Ham & Sweetcorn":
            pizza = "Ham & Sweetcorn" + Food_String;
        break;

        case "Chicken & Mushrooms":
            pizza = "Chicken & Mushrooms" + Food_String;
        break;

        case "Mexican Hot":
            pizza = "Mexican Hot" + Food_String;
        break;

        case "American Spicy":
            pizza = "American Spicy" + Food_String;
        break;

        default:
        pizza = "Please enter your option as written on the above list.";


    }
    document.getElementById("switch").innerHTML = pizza;
}
