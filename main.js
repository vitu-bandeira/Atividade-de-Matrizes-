const array = []
array.push([])
array.push([])
array.push([])
array.push([])

array[0].push(document.getElementById("1"))
array[0].push(document.getElementById("2"))
array[0].push(document.getElementById("3"))
array[1].push(document.getElementById("4"))
array[1].push(document.getElementById("5"))
array[1].push(document.getElementById("6"))
array[2].push(document.getElementById("7"))
array[2].push(document.getElementById("8"))
array[2].push(document.getElementById("9"))
array[3].push(document.getElementById("10"));
array[3].push(document.getElementById("11"));
array[3].push(document.getElementById("12"));
array[3].push(document.getElementById("13"));

let matriz = [];

function Numero_Aleatorios() {
    var num = 9;
    
    return Math.floor(Math.random() * num+1);
}

function Numero_Aleatorios4x4() {
    const num = 16;
    return Math.floor(Math.random() * num);
}
function preechendo_matriz() {
    var Numeros = new Set(); 
    for (var i = 0; i < 3; i++) {
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            var numero;
            do {
                numero = Numero_Aleatorios();
            } while (Numeros.has(numero));
            matriz[i][j] = numero;
            Numeros.add(numero);
        }   
    }
}
function preechendo_matriz4x4() {
    var Numeros = new Set(); 
    for (var i = 0; i < 4; i++) {
        matriz[i] = [];
        for (var j = 0; j < 4; j++) {
            var numero;
            do {
                numero = Numero_Aleatorios4x4();
            } while (Numeros.has(numero));
            matriz[i][j] = numero;
            Numeros.add(numero);
        }   
    }
}

function somarColuna0(matriz) {
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        soma += matriz[i][0];
    }

    return soma;
}

function somarColuna1(matriz) {
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        soma += matriz[i][1];
    }

    return soma;
}

function somarColuna2(matriz) {
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2];
    }

    return soma;

}
function somarColuna3(matriz) {
    let soma = 0;

    for (let i = 0; i < 4; i++) {
        soma += matriz[i][3];
    }

    return soma;
}
function somarLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < matriz[linha].length; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}

function somardiagonal(matriz){
    let soma = 0;
    soma = matriz[0][0] + matriz[1][1] + matriz[2][2]
    return soma;
}

function somardiagonal1(matriz){
    let soma = 0;
    soma = matriz[0][2] + matriz[1][1] + matriz[2][0]
    return soma;
}



function somarLinha3(matriz) {
    let soma = 0;
    for (let j = 0; j < 4; j++) {
        soma += matriz[3][j];
    }
    return soma;
}

function somardiagonal2(matriz) {
    let soma = 0;
    soma = matriz[0][0] + matriz[1][1] + matriz[2][2] + matriz[3][3];
    return soma;
}

function somardiagonal3(matriz) {
    let soma = 0;
    soma = matriz[0][3] + matriz[1][2] + matriz[2][1] + matriz[3][0];
    return soma;
}

function Somas_Iguais() {
    do {
        preechendo_matriz();
    } while (
        somarColuna0(matriz) !== somarColuna1(matriz) ||
        somarColuna1(matriz) !== somarColuna2(matriz) ||
        somarColuna0(matriz) !== somarLinha(matriz, 0) ||
        somarColuna1(matriz) !== somarLinha(matriz, 1) ||
        somarColuna2(matriz) !== somarLinha(matriz, 2) ||
        somarColuna0(matriz) !== somardiagonal(matriz) ||
        somarColuna1(matriz) !== somardiagonal1(matriz)
    );

    for (var i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[i][j].innerText =  matriz[i][j]
        }
    }
 }

 function criar_matriz4x4(){
 var m1 = document.querySelector("#m1")
 var m2 = document.querySelector("#m2")
 var m3 = document.querySelector("#m3")
 var m4 = document.querySelector("#m4")
 var m5 = document.querySelector("#m5")
 var m6 = document.querySelector("#m6")
 var m7 = document.querySelector("#m7")
 var m8 = document.querySelector("#m8")
 var m9 = document.querySelector("#m9")
 var m10 = document.querySelector("#m10")
 var m11 = document.querySelector("#m11")
 var m12 = document.querySelector("#m12")
 var m13 = document.querySelector("#m13")
 var m14 = document.querySelector("#m14")
 var m15 = document.querySelector("#m15")
 var m16= document.querySelector("#m16")

 m1.innerHTML=("1")
 m2.innerHTML=("15")
 m3.innerHTML=("14")
 m4.innerHTML=("4")
 m5.innerHTML=("12")
 m6.innerHTML=("6")
 m7.innerHTML=("7")
 m8.innerHTML=("9")
 m9.innerHTML=("8")
 m10.innerHTML=("10")
 m11.innerHTML=("11")
 m12.innerHTML=("5")
 m13.innerHTML=("13")
 m14.innerHTML=("3")
 m15.innerHTML=("2")
 m16.innerHTML=("16")
 }