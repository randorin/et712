document.getElementById("redShirtContainer").onmouseover = function() {
    document.getElementById("redShirtContainer").style.transform = "scale(1.1)";
    document.getElementById("redShirtName").style.display = "block";
};
document.getElementById("redShirtContainer").onmouseout = function() {
    document.getElementById("redShirtContainer").style.transform = "scale(1)";
    document.getElementById("redShirtName").style.display = "none";
};

document.getElementById("bluePantsContainer").onmouseover = function() {
    document.getElementById("bluePantsContainer").style.transform = "scale(1.1)";
    document.getElementById("bluePantsName").style.display = "block";
};
document.getElementById("bluePantsContainer").onmouseout = function() {
    document.getElementById("bluePantsContainer").style.transform = "scale(1)";
    document.getElementById("bluePantsName").style.display = "none";
};
