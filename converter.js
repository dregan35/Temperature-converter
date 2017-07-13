//declared variables
let input = document.getElementById("input");
let C = document.getElementById("C");
let F = document.getElementById("F");
let output = document.getElementById("output");
let converter = document.getElementById("converter");
let btn_Clear = document.getElementById("btn_Clear");
// defined function toCelsius
function toCelsius() {
    console.log("toCelsiusisrunning");
    // defined variable Celsius to equal what the user inputs plus the calculation to convert it to Celsius and rounds the number
    let celsius = Math.round(input.value - 32) * 5 / 9;
    outputTemp(celsius, "C&deg;");
}

//defines the function toFahrenheit
function toFahrenheit() {
    console.log("toFahrenheitisrunnin");
    //defines the variable Fahrenheit to equal what the user inputs plus the calculation to convert it to Fahrenheit and rounds the number
    let fahrenheit = Math.round(input.value * 9 / 5) + 32;
    // calls the function outputTemp with Fahrenheit and "F&deg;" passed into it
    outputTemp(fahrenheit, "F&deg;");
}

//defined the function clearInput
function clearEverything() {
    //set input.value to equal an empty string
    input.value = "";
    //sets output to an empty string
    output.innerHTML = "";
    // if C.check equals false
    C.check = false;
    // if F.check equals false
    F.check = false;
    //called the function clearColorClasses
    clearColorClasses();
}

function clearColorClasses () {
 // remove the classes "red", "blue", and "green" from output
    output.classList.remove("red", "blue", "green");
}
// defined function determineConveter which expects clickEvent (from line)
function determineConverter() {
    //conditional if C.checked is true
    if (C.checked) {
        //call toFarenheit
        toFahrenheit();
        //otherwise
    } else {
        //call toCelsius
        toCelsius();
    }
}
//defined function checkInput
function checkInput() {
    //conditional if input has value and C.checked or F.checked is true
    if (input.value && (C.checked || F.checked)) {
        //call determineConverter
        determineConverter();

    }
}
//defined function outputTemp that expects temp and degree (from line 25 & 33 "Celsius, C&deg", "Fahrenheit, F&deg;")
function outputTemp(temp, degree) {
    //called the function clearColorClasses
    clearColorClasses();
    //sets output to display the concatenation from the string template literal
    output.innerHTML += `${temp} ${degree}`;
    //called color with temp and degree passed into it
    color(temp, degree);
}
//defined the function color that expects temp and degree (from line 73 "temp" "degree")
function color(temp, degree) {
    console.log("d", degree);
    //conditional switch for degree 
    switch (degree) {
        // makes the case for "F&deg;"
        case "F&deg;":
            //conditional if temp is greater than 90 equals true
            if (temp > 90) {
                //add the class "red" to output
                output.classList.add("red");
            // conditional otherwise if temp is less than 32 equals true
            } else if (temp < 32) {
               //add the class "blue" to the output
                output.classList.add("blue");
           // otherwise 
            } else {
                //add the class "green" to output
                output.classList.add("green");
            }
            break;
        // makes the case for "C&deg;"
        case "C&deg;":
            // conditional if the temp is greater than 32 equals true
            if (temp > 32) {
                // add the class "red" to output
                output.classList.add("red");
            // otherwise if temp is less than 0 equals true
            } else if (temp < 0) {
                // add the class "blue" to output
                output.classList.add("blue");
            //otherwise
            } else {
                // add the class "green" to output
                output.classList.add("green");
            }
    }
}

    // added a event listener to the element converter to check for "click" and run checkInput
    converter.addEventListener("click", checkInput);
    // added a event listener to the element btn_Clear  to check for "click" and run checkInput
    btn_Clear.addEventListener("click", clearEverything);
    // added event listener to input to check for key up and run anonymous function with e passed into it
    input.addEventListener("keyup", function(e) {
        //conditional if the event key-code is 13(enter key) equals true
        if (e.keyCode === 13) {
            // calls the function checkInput
            checkInput();

        }
    });
