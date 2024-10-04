const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const buttonClick = document.getElementById("button");

const redDuration = 5000;
const yellowDuration = 2000;
const greenDuration = 10000;

let currentLight = "red";
let intervalId;

function updateLights() {

    if (currentLight === "red") {
        console.log("red")
        redLight.style.opacity = 1;
        yellowLight.style.opacity = 0.2
        greenLight.style.opacity = 0.2;
        setTimeout(updateLights, redDuration);
        currentLight = "yellow";
    } else if (currentLight === "yellow") {
        console.log("yellow")
        redLight.style.opacity = 0.2;
        yellowLight.style.opacity = 1;
        greenLight.style.opacity = 0.2;
        currentLight = "green";
        setTimeout(updateLights, yellowDuration);

    } else if (currentLight === "green") {
        console.log("green")
        redLight.style.opacity = 0.2;
        yellowLight.style.opacity = 0.2;
        greenLight.style.opacity = 1;
        currentLight = "red";
        setTimeout(() => {
            updateLights()
        }, greenDuration);
    }
}

function startTrafficLights() {
    clearTimeout(intervalId);
    updateLights();
}

