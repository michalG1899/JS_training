var wynik1 = 0;
var wynik11 = '';
var wynik2 = 0;
var wynik22 = '';
var wynik3 = 0;
var wynik33 = '';
var wynik4 = 0;
var wynik44 = '';
var wynik5 = 0;
var wynik55 = '';
var wynik6 = 0;
var wynik66 = '';
var liczbaRzutow = 0;

function rzuc() {
    tab = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    rzut = Math.floor(Math.random() * 6 + 1);
    liczbaRzutow++;
    document.querySelector('#liczbaRzutow').value = liczbaRzutow;
    document.querySelector('#kostka').value = rzut;
    document.querySelector('#kostka_obraz').value = tab[rzut - 1];


    if (rzut == 1) {
        wynik1++;
        wynik11 += "X";
        document.querySelector('#wynik1').value = wynik1
        document.querySelector('#wynik11').value = wynik11
    } else if (rzut == 2) {
        wynik2++;
        wynik22 += "X";
        document.querySelector('#wynik2').value = wynik2
        document.querySelector('#wynik22').value = wynik22
    } else if (rzut == 3) {
        wynik3++;
        wynik33 += "X";
        document.querySelector('#wynik3').value = wynik3
        document.querySelector('#wynik33').value = wynik33
    } else if (rzut == 4) {
        wynik4++;
        wynik44 += "X";
        document.querySelector('#wynik4').value = wynik4
        document.querySelector('#wynik44').value = wynik44
    } else if (rzut == 5) {
        wynik5++;
        wynik55 += "X";
        document.querySelector('#wynik5').value = wynik5
        document.querySelector('#wynik55').value = wynik55
    } else {
        wynik6++;
        wynik66 += "X";
        document.querySelector('#wynik6').value = wynik6
        document.querySelector('#wynik66').value = wynik66
    }
}