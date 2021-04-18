function round() {
    liczba = document.querySelector('#number').value;

    liczbaKoncowa = Math.round(liczba);
    document.querySelector('#liczba').value = liczbaKoncowa;

    liczbaKoncowaGora = Math.ceil(liczba);
    document.querySelector('#liczbaUp').value = liczbaKoncowaGora;

    liczbaKoncowaDol = Math.floor(liczba);
    document.querySelector('#liczbaDown').value = liczbaKoncowaDol;
}