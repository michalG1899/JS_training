function odmien(ilosc, [pojedynczaMianownik, mnogaMianownik, mnogaDopelniacz]) {
    if (ilosc == 1) {
        document.querySelector("#wynik").value = `${ilosc} ${pojedynczaMianownik}`;
    } else if (ilosc % 10 >= 2 && ilosc % 10 <= 4 && (ilosc % 100 < 10 || ilosc % 100 >= 20)) {
        document.querySelector("#wynik").value = `${ilosc} ${mnogaMianownik}`;
    } else {
        document.querySelector("#wynik").value = `${ilosc} ${mnogaDopelniacz}`;
    }
}