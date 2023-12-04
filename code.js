// JavaScript code to handle button click event
document.getElementById("colorChangeBtn").addEventListener("click", function() {
    changeButtonColor();
    updateOutputText();
});

function changeButtonColor() {
    var button = document.getElementById("colorChangeBtn");
    var currentColor = button.style.backgroundColor;

    // Change button color to red if it's not red, otherwise change it to the default color
    button.style.backgroundColor = (currentColor !== "red") ? "red" : "";
    button.style.color = (currentColor !== "red") ? "white" : "";
}

function updateOutputText() {
    var outputText = document.getElementById("outputText");
    outputText.textContent = "Button color changed!";
}
