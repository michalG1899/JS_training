document.addEventListener("DOMContentLoaded", function () {
    menu();

});

let listaPrzychodni = [];

class Przychodnia {
    constructor(nazwa, miasto) {
        this.nazwa = nazwa;
        this.miasto = miasto;
        this.listaPacjentow = [];
    }

    dodajPacjenta(pacjent) {
        this.listaPacjentow.push(pacjent);
    }

    pokazListePacjentow() {
        console.log(`Lista pacjentów w przychodni ${this.nazwa}:`)
        for (let pacjent of this.listaPacjentow) {
            console.log(`Imię: ${pacjent.imie}, nazwisko: ${pacjent.nazwisko}`);
        }
    }
}

class Pacjent {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.listaChorob = [];
    }

    dodajChorobe(choroba) {
        this.listaChorob.push(choroba);
    }

    pokazChoroby() {
        console.log(`Lista chorób pacjenta: ${this.nazwisko}: `)
        for (let choroba of this.listaChorob) {
            console.log(`${choroba.nazwa}`);
        }
    }
}

function menu() {

    while (true) {
        let menu = prompt(`Wybierz menu\n1-PRZYCHODNIA, 2-PACJENT, 3-koniec`).toUpperCase();

        if (menu == "1") {
            menuPrzychodnia();
        }
        else if (menu == "2") {
            menuPacject();
        }
        else if (menu == "3") {
            console.log("Koniec programu");
            break;
        }
        else {
            console.log("Nierozpoznana opcja menu");
        }
    }

}

function menuPrzychodnia() {
    let menu1 = prompt(`Wybierz menu\n1-dodaj przychodnię, 2-dodaj pacjenta do przychodni, 3-lista przychodni, 4-lista pacjentów w przychodni`).toUpperCase();

    if (menu1 == 1) {

        let nazwa = prompt("Podaj nazwę przychodni:");
        let miasto = prompt("Podaj miasto przychodni:");

        let przychodnia = new Przychodnia(nazwa, miasto);
        listaPrzychodni.push(przychodnia);
        console.log("Dodano przychodnię do listy");

    } else if (menu1 == 2) {
        let imie = prompt("Podaj imię pacjenta:");
        let nazwisko = prompt("Podaj nazwisko pacjenta:");

        let pacjent = new Pacjent(imie, nazwisko);

        let nazwaPrzychodni = prompt("Do której przychodni zapisać pacjenta - podaj nazwę przychodni:");

        let czyPrzychodniaIstnieje = false;
        for (let przychodnia of listaPrzychodni) {
            if (nazwaPrzychodni == przychodnia.nazwa) {
                przychodnia.dodajPacjenta(pacjent);
                console.log(`Pomyślnie dodano pacjenta ${nazwisko} do przychodni ${przychodnia.nazwa}`);
                czyPrzychodniaIstnieje = true;
                break;
            }
        } if (!czyPrzychodniaIstnieje) {
            console.log("Nie ma takiej przychodni");
        }

    } else if (menu1 == 3) {
        console.log("Lista przychodni");
        for (let przychodnia of listaPrzychodni) {
            console.log(`Nazwa przychodni: ${przychodnia.nazwa}, miasto: ${przychodnia.miasto}`);
        }

    } else if (menu1 == 4) {
        let nazwaPrzychodni = prompt("Podaj nazwę przychodni");
        for (let przychodnia of listaPrzychodni) {
            if (przychodnia.nazwa == nazwaPrzychodni) {
                przychodnia.pokazListePacjentow();
                break;
            }
        }
    }
}

function menuPacject() {
    let menu2 = prompt(`Wybierz menu\n1-dodaj chorobę, 2-pokaż listę chorób`).toUpperCase();

    if (menu2 == 1) {
        let nazwaPrzychodni = prompt("Podaj nazwę przychodni:");
        let czyPrzychodniaIstnieje = false;
        for (let przychodnia of listaPrzychodni) {
            if (przychodnia.nazwa == nazwaPrzychodni) {
                czyPrzychodniaIstnieje = true;
                let nazwiskoPacjenta = prompt("Podaj nazwisko pacjenta:");
                for (let pacjent of przychodnia.listaPacjentow) {
                    if (nazwiskoPacjenta == pacjent.nazwisko) {
                        let choroba = prompt("Podaj chorobę pacjenta:");
                        pacjent.dodajChorobe(choroba);
                        break;
                    }
                } break;
            }

        }
        if (!czyPrzychodniaIstnieje) {
            console.log("Nie ma takiej przychodni");
        }

    } else if (menu2 == 2) {
        let nazwaPrzychodni = prompt("Podaj nazwę przychodni:");
        let czyPrzychodniaIstnieje = false;
        for (let przychodnia of listaPrzychodni) {
            if (przychodnia.nazwa == nazwaPrzychodni) {
                czyPrzychodniaIstnieje = true;
                let nazwiskoPacjenta = prompt("Podaj nazwisko pacjenta:");
                let czyPacjentIstnieje = false;
                for (let pacjent of przychodnia.listaPacjentow) {
                    if (nazwiskoPacjenta == pacjent.nazwisko) {

                        console.log(`Choroby pacjenta ${pacjent.imie} ${pacjent.nazwisko} :`);
                        for (let choroba of pacjent.listaChorob) {
                            console.log(choroba);
                        }

                        czyPacjentIstnieje = true;
                        break;
                    }
                } if (!czyPacjentIstnieje) {
                    console.log("Brak pacjenta o takim nazwisku");
                }
            }

        } if (!czyPrzychodniaIstnieje) {
            console.log("Nie ma takiej przychodni");
        }
    }
}
