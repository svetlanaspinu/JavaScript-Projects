function Call_Loop() {
    var colors = " ";
    var strong = 77;
    while (strong < 77) {
        colors += "<br>" + strong;
        strong ++;
    }
    document.getElementById("looping").innerHTML = colors;
}