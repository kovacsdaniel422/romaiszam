function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}

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

};
function romai(n) {
    return szamok[n]
}
romai(30);
let valami= convertalas(12);

function convertalas(bevittSzam) {
    var romaiSzam = "";
    var num = [];
    szamSzoveg = bevittSzam.toString();
    if (szamSzoveg.lenght == 4) {
        num.push(szamSzoveg.charAt(0) + "000", szamSzoveg.charAt(1) + "00", szamSzoveg.charAt(2) + "0", szamSzoveg.charAt(3))

    }
    else if (szamSzoveg.lenght == 3) {
        num.push(szamSzoveg.charAt(0) + "00", szamSzoveg.charAt(1) + "0", szamSzoveg.charAt(2))

    }
    else if (szamSzoveg.lenght == 2) {
        num.push(szamSzoveg.charAt(0) + "0", charAt(1))


    } else if (szamSzoveg.lenght == 1) {
        num.push(szamSzoveg.charAt(0))

    }
    console.log(num);


    for (let index = 0; index < num.length - 1; index++) {
        romaiSzam += romai(num[index])

    }
    console.log(num);
    return romaiSzam;
}
console.log(valami);

