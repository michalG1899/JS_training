document.addEventListener("DOMContentLoaded", function () {
    pokaz();

    document.querySelector("#dodaj").onclick = function () {
        dodaj();
        pokaz();
    }

    document.querySelector("#usunWszystkie").onclick = function () {
        usunWszystkie();
    }
});

class Kontakt {
    constructor(imie, nazwisko, telefon) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}

function dodaj() {
    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let telefon = document.querySelector("#telefon").value;

    let kontakt = new Kontakt(imie, nazwisko, telefon);

    let ktJSON = localStorage.getItem("KT");
    let ktTablica = JSON.parse(ktJSON);

    if (ktTablica != null) {
        ktTablica.push(kontakt);
        localStorage.setItem("KT", JSON.stringify(ktTablica));
    } else {
        localStorage.setItem("KT", JSON.stringify([kontakt]));
    }

}

function pokaz() {
    let ktJSON = localStorage.getItem("KT");
    let ktTablica = JSON.parse(ktJSON);

    let html = "<ul>";
    if (ktTablica != null) {

        let i = 0;
        for (let x of ktTablica) {

            html += `<li>${x.imie} ${x.nazwisko} ${x.telefon} <a href='#' onClick='usun(${i})'>usuń</a></li>`;
            i++;
        }

    }
    html += "</ul>";

    document.querySelector("#listaKontaktow").innerHTML = html;
}

function usunWszystkie() {
    localStorage.clear();
    pokaz();
}

function usun(index) {
    let ktJSON = localStorage.getItem("KT");
    let ktTablica = JSON.parse(ktJSON);

    ktTablica.splice(index, 1);
    localStorage.setItem("KT", JSON.stringify(ktTablica));
    pokaz();
}