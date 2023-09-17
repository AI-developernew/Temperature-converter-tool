function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultTemp = document.getElementById("resultTemp");

    if (fromUnit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        resultTemp.innerText = `${inputTemp} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit`;
    } else {
        const celsius = (inputTemp - 32) * 5/9;
        resultTemp.innerText = `${inputTemp} Fahrenheit is ${celsius.toFixed(2)} Celsius`;
    }
}