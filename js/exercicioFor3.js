let n = Number(prompt('Digite um número: '));

function calculo() {
    const valorRecebido = [];
    
    for (let i = 0; i <= 10; i++) {
        valorRecebido = [n];
        `${valorRecebido} * ${i} = ${valorRecebido * i}`;
    }
}

calculo();
