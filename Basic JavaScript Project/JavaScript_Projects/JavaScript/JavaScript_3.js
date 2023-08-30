// using data_attributes
function data_attributes(food) {
    var aboutFood = food.getAttribute("data-about-food");
    alert (aboutFood + " is the " + food.innerHtml + " menu of the day.")
}
