let anoAnalizar = Number(prompt('Ingresa un año para saber si es bisiesto'));
let div4 = anoAnalizar %4;
let div100 = anoAnalizar %100;
let div400 = anoAnalizar %400;


if (((div4 == 0) && (div100 != 0)) || (div400 == 0)) {
    alert(`${anoAnalizar} Es año bisiesto`);
} else {
    alert(`${anoAnalizar} No es año bisiesto`);
}