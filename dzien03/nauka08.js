miesiace = ["Styczeń", "Luty", "Marzec",
"Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik",
"Listopad", "Grudzień"];

dlugosci = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
n = 0
ilosc_dni = 31;
opisDlugi = "Długi miesiąc";
opisKrotki = "Krótki miesiąc";


function nextMonth() {
    document.querySelector("#current_month").value = miesiace[n];
    if (n == miesiace.length - 1) {
        n = 0;
    } else {
        n = n + 1;
    }

}