console.log("helloWorld");
// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// √ In the HTML, have one input field where someone can enter in a temperature.
// √ Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// √ Create a block level element that will hold the text of the converted temperature.
// √ Create a button that, when clicked, displays the converted temperature.
// √ Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
//declared variables
let input = document.getElementById("input");
let C = document.getElementById("C");
let F = document.getElementById("F");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let btn_Clear = document.getElementById("btn_Clear");
// deinfed function toCelsius
function toCelsius() {
    // defined variable celsius to equal what the user inputs plus the calculation to convert it to celsius  
    let celsius = (input.value - 32) * 5 / 9; 

    }

    //defines the function toFahrenheit
    function toFahrenheit() {
        //defines the variable fhrenheit to equal what the user inputs plus the calculation to convert it to fahrenheit
        let fahrenheit = (input.value * 9 / 5) + 32;
       
    }


//defined the function clearInput
function clearInput() {
    //set input.value to equal an empty string
    input.value = "";
}
//defined the function clearOutput
function clearOutput() {
    //set output to an empty string
    output.value = "";
}
// defined function determineConveter which expects clickEvent (from line)
function determineConverter(clickEvent) {
    console.log("event", clickEvent);

}

function checkInput() {
    if (input.value && (C.checked || F.checked)) {
        determineConverter();

    }
}


converter.addEventListener("click", checkInput);
btn_Clear.addEventListener("click", clearInput);
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        checkInput();

    }
});
