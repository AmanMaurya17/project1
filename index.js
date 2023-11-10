function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");
    var result;

    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature} Celsius is equal to ${result} Fahrenheit.`;
    } else {
        result = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature} Fahrenheit is equal to ${result} Celsius.`;
    }
}
