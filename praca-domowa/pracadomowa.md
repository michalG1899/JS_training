# Praca domowa

## Rzeczowniki - liczba mnoga

Napisać funkcję odmieniającą wskazany rzeczownik przez podaną liczbę.

Przykład zastosowania:
```javascript
odmien(1, ['kot', 'koty', 'kotów']);    // zwraca 'kot'
odmien(2, ['kot', 'koty', 'kotów']);    // zwraca 'koty'
odmien(3, ['kot', 'koty', 'kotów']);    // zwraca 'koty'
odmien(5, ['kot', 'koty', 'kotów']);    // zwraca 'kotów'
odmien(10, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(20, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(21, ['kot', 'koty', 'kotów']);   // zwraca 'kotów'
odmien(22, ['kot', 'koty', 'kotów']);   // zwraca 'koty'
/* i.t.d */
```

## Nazwy liczebników

Napisać funkcję zamieniającą liczby (`int`) na zapis słowny (`string`).

Przykład:
```javascript
slownie(1);         // zwraca 'jeden'
slownie(2);         // zwraca 'dwa'
slownie(5);         // zwraca 'pięć'
slownie(20);        // zwraca 'dwadzieścia'
slownie(123);       // zwraca 'sto dwadzieścia trzy'
slownie(-5);        // zwraca 'minus pięć'
slownie(456123);    // zwraca 'czterysta pięćdziesiąt sześć tysięcy sto dwadzieścia trzy'
```

## Pola i obwody figur

Napisać prostą aplikację pozwalającą wyliczać pola i obwody różnych figur na podstawie różnych wartości:

- kwadratu:
  - na podstawie boku
- prostokąta:
  - na podstawie dwóch boków
- trójkąta prostokątnego:
  - na podstawie dwóch boków
- trójkąta równoramiennego:
  - na podstawie podstawy i wysokości
- trójkąta równobocznego
  - na podstawie boku
- trapezu
- równoległoboku
- rombu
- koła/okręgu
- *itp*

## Statystyki liter

Napisać funkcję, która przeanalizuje wprowadzony tekst i poda częstotliwość występowania poszczególnych znaków.

Np. dla tekstu: `Ala ma kota a kot ma pchły`

Wyświetli tabelę typu:

|litera|liczba wystąpień|procent wystąpień|
|---|----|-------|
| A |  1 | 3.8%  |
| a |  5 | 19.2% |
| l |  1 | ...   |
| m |  2 | ...   |
| k |  2 | ...   |
*itd*

Uwaga, do wykonania zadania przydatne będą dwie funkcje, służące do zamiany znaku na jego kod ASCII/Unicode, których jeszcze nie omawialiśmy:
```javascript
var znak = "a";

znak.charCodeAt(0);         // zwraca liczbę 97
String.fromCharCode(97);    // zwraca literę "a"
```

## Oszukany rzut kostką

Napisać aplikację do wirtualnego rzutu kostką, ale posiadającą ukrytą funkcjonalność pozwalającą oszukiwać - po wykonaniu przez użytkownika tajnego ruchu program w kolejnym rzucie ma zawsze zwracać `6`.

## Statystyki rzutu kostką

Napisać aplikację, która zasymuluje rzut kilkoma kostkami `6`-ściennymi (np. `4`) i poda sumaryczny wynik.

Przykład:

Rzucamy `4` kośćmi i wychodzą wartości: `4`, `3`, `1`, `6`, więc suma to `4+3+1+6 = 14`.

Zasymulować dużą liczbę takich rzutów (np. `100000`) i wygenerować wykres z uzyskanymi wynikami.

## Lotto

Zasymulować `100000` losowych kuponów Lotto. Policzyć ile kuponów trafiło trójkę, czwórkę, piątkę i szóstkę. Sprawdzić, czy otrzymane liczby są zgodne z [teoretycznymi prawdopodobieństwami](https://pl.wikipedia.org/wiki/Lotto_(gra_liczbowa)#Prawdopodobie%C5%84stwo_trafienia_w_Lotto).

Uwaga, do wykonania zadania przydatna może być pętla `while`, której jeszcze nie omawialiśmy:
```javascript
while(warunek){
  operacje...
}
```

## Tabliczka mnożenia

Stworzyć stronę wyświetlającą tabliczkę mnożenia.

## Liczby pierwsze

### Test
Napisać aplikację, która sprawdza, czy dana [liczba jest pierwsza](https://pl.wikipedia.org/wiki/Liczba_pierwsza).

### Sito Eratostenesa
Napisać aplikację, która generuje listę liczb pierwszych metodą [Sita Eratostenesa](https://pl.wikipedia.org/wiki/Sito_Eratostenesa).

## Dekoder PESEL

Napisać aplikację, która na podstawie podanego numeru PESEL podaje:
- datę urodzenia
- płeć
Oraz sprawdza, czy dany [numer PESEL](https://pl.wikipedia.org/wiki/PESEL) jest poprawny.

## Temperatury

Napisać aplikację do przeliczania [temperatur między różnymi skalami](https://pl.wikipedia.org/wiki/Skala_termometryczna):
- Celsjusza
- Fahrenheita
- Kelvina
- Rankine
