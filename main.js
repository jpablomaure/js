let anoAnalizar = Number(prompt('Ingresa un año para saber si es bisiesto o ingrese 999 para terminar'));
// let valor = String(anoAnalizar);
let div4 = anoAnalizar % 4;
let div100 = anoAnalizar % 100;
let div400 = anoAnalizar % 400;

while (anoAnalizar != 999) {
    if (((div4 == 0) && (div100 != 0)) || (div400 == 0)) {
        alert(`${anoAnalizar} Es año bisiesto`);
    } else {
        alert(`${anoAnalizar} No es año bisiesto`);
    }
    anoAnalizar = Number(prompt('Ingresa otro año o 999 para terminar'));
    div4 = anoAnalizar % 4;
    div100 = anoAnalizar % 100;
    div400 = anoAnalizar % 400;
}
alert("Desafio terminado");