function odmien() {

    iloscSztuk = document.querySelector("#il").value;

    if (iloscSztuk == 1) {
        document.querySelector("#wynik").value = iloscSztuk + " pies";
    } else if (iloscSztuk % 10 >= 2 && iloscSztuk % 10 <= 4 && (iloscSztuk % 100 < 10 || iloscSztuk % 100 >= 20)) {
        document.querySelector("#wynik").value = iloscSztuk + " psy";
    } else {
        document.querySelector("#wynik").value = iloscSztuk + " psów"
    }
}