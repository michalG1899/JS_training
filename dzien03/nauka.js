function przelicz() {

    rok = document.querySelector('#rok').value * 1;

    wiek = 2021 - rok;
    document.querySelector('#wiek').value = wiek;

    if (wiek >= 18) {
        document.querySelector('#pel').value = "Pełnoletni";
    } else {
        roznica = 18 - wiek;
        document.querySelector('#pel').value = `Niepełnoletni. Zostanie pełnoletni za ${roznica} lat.`;
    }
    czyNaPosla = wiek >= 21;
    document.querySelector('#posel').value = czyNaPosla;

    czyNaSenatora = wiek >= 30;
    document.querySelector('#sen').value = czyNaSenatora;

    czyNaPrezydenta = wiek >= 35;
    document.querySelector('#prez').value = czyNaPrezydenta;

}

function increaseTemp(temp) {
    temperatura = temp + 0.5;
}