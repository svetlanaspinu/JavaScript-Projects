function my_Dictionary() {
    var Pizza = {
        Name:"Peperoni",
        Toping:"Tomato sauce, mozzarela cheese and chorizo.",
        Size:"Large",
        Price:"15$",
    };
    // using the delete statement 
    delete Pizza.Price
    // output just for the price
    document.getElementById("Dictionary").innerHTML = Pizza.Price;
}