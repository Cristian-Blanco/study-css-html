// Arquitectura de Computadores y Laboratorio
//     Nombre: Cristian Javier Martinez Blanco
//     Codigo: 20182020155 

function decimalToBinarY(num){
    let intNum = parseInt(num);
    return intNum.toString(2);
}

function binaryToDecimal(num){
    let decimal = parseInt(num, 2);
    return decimal;
}

function decimalToOctal(num){
    let intNum = parseInt(num);
    return intNum.toString(8);
}

function octalToDecimal(num){
    let decimal = parseInt(num, 8);
    return decimal;
}

function decimalToHexadecimal(num){
    let intNum = parseInt(num);
    return intNum.toString(16);
}

function hexadecimalToDecimal(num){
    let decimal = parseInt(num, 16);
    return decimal;
}

function binaryToOctal(num){
    let decimal = parseInt(num, 2);
    let octal = decimal.toString(8);
    return octal;
}

function octalToBinary(num){
    let decimal = parseInt(num, 8);
    let binary = decimal.toString(2);
    return binary;
}

function binaryToHexadecimal(num){
    let decimal = parseInt(num, 2);
    let hexadecimal = decimal.toString(16);
    return hexadecimal;
}

function hexadecimalToBinary(num){
    let decimal = parseInt(num, 16);
    let binary = decimal.toString(2);
    return binary;
}

function transform(){
    let $type = document.getElementById("typecon").value;
    let $variable = document.getElementById("conver").value;
    let num;
    switch($type){
        case "decimalToBinary":
            num = decimalToBinarY($variable);
            break;
        case "binaryToDecimal":
            num = binaryToDecimal($variable);
            break;
        case "decimalToOctal":
            num = decimalToOctal($variable);
            break;
        case "octalToDecimal":
            num = octalToDecimal($variable);
            break;
        case "decimalToHexadecimal":
            num = decimalToHexadecimal($variable).toUpperCase();
            break;
        case "hexadecimalToDecimal":
            num = hexadecimalToDecimal($variable);
            break;
        case "binaryToOctal":
            num = binaryToOctal($variable);
            break;
        case "octalToBinary":
            num = octalToBinary($variable);
            break;
        case "binaryToHexadecimal":
            num = binaryToHexadecimal($variable);
            break;
        case "hexadecimalToBinary":
            num = hexadecimalToBinary($variable);
            break;
        
    }
    num = (num.toString() == "NaN") ? "VALOR INGRESADO NO PERMITIDO" : num; 
    document.getElementById("print").value = num;
}