// Soma de números:

function soma(x, y) {
    const resultado = x + y
    return resultado;
}

console.log(soma(5, 5));
console.log(soma(10, 11));
console.log(soma(10, 10.5));

// Soma com mais de dois núnmeros

function somaMaior(x, y, z, w, t) {
    const resultado2 = x + y + z + w + t
    return resultado2;
}

console.log(somaMaior(10, 20, 30, 40, 50));
console.log(somaMaior(1, 2, 3, 4, 5));
console.log(somaMaior(1, 1, 1, 1, 1));

// Subtracao de números

function subtracao(x, y) {
    const resultado3 = x - y
    return resultado3;
}

console.log(subtracao(3, 2));
console.log(subtracao(2, 3));
console.log(subtracao(5, 5));

// Subtração com mais de dois números

function subtracaoMaior(x, y, z) {
    const resultado4 = x - y - z
    return resultado4;
}

console.log(subtracaoMaior(5, 4, 3));
console.log(subtracaoMaior(1, 2, 3));
console.log(subtracaoMaior(5, 10, 20));

// Multiplicação de números

function multiplicacao(x, y) {
    const resultado5 = x * y
    return resultado5;
}

console.log(multiplicacao(2, 3));
console.log(multiplicacao(5, 5));
console.log(multiplicacao(7, 3));

// Multiplicação com mais de dois números

function multiplicacaoMaior(x, y, z, t) {
    const resultado6 = x * y * z * t
    return resultado6;
}

console.log(multiplicacaoMaior(10, 20, 30, 40));
console.log(multiplicacaoMaior(1, 2, 3, 4));
console.log(multiplicacaoMaior(2, 2, 2, 2));

// Divisão entre números

function divisao(x, y) {
    const resultado7 = x / y
    return resultado7;
}

console.log(divisao(4, 2));
console.log(divisao(25, 5));
console.log(divisao(10, 10));

// Uma equação completa

function equacao(x, y, z, w, t) {
    const resultado8 = ((x + y) * (z) ** w) / t
    return resultado8;
}

console.log(equacao(1, 1, 2, 2, 4));
console.log(equacao(2, 2, 2, 2, 2));
console.log(equacao(10, 10, 10, 10, 10));
