temperatura = 20.0;

function increaseTemp() {
    temperatura = temperatura + 0.5;
    document.querySelector("#temp").value = temperatura.toFixed(1);
}

function decreaseTemp() {
    temperatura = temperatura - 0.5;
    document.querySelector("#temp").value = temperatura.toFixed(1);

}