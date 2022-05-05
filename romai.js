var szamok = new Object();
var szamok = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM",

};

function romai(n) {
    return szamok[n]
}
let TesztMenet = convertalas(3999);

function convertalas(bevittSzam) {
    let romaiSzam = "";
    let num = [];
    let hanyNulla = "";
    szamSzoveg = bevittSzam.toString();

    for (let index = szamSzoveg.length; index > 0; index--) {

        if (szamSzoveg.charAt((index) - 1) != 0) {
            num.unshift(szamSzoveg.charAt((index) - 1) + hanyNulla)
        }
        hanyNulla = hanyNulla + "0"
        console.log(num)
        console.log(hanyNulla)
    }

    for (let index = 0; index < num.length; index++) {
        romaiSzam += romai(num[index])

    }

    return romaiSzam;
}
console.log(TesztMenet);

function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = x + " Római számba átváltva: " + convertalas(x);
}