let n = Number(prompt('Digite um número: '));

function tabuada() {

    const valorRecebido = [];

    for (let i = 0; i <= 10; i++) {

        const calculo = `${n * i}`;
        valorRecebido.push(`${n} x ${i} = ${calculo}`);
    }
    
    return valorRecebido;
}

const resultado = tabuada();

for (let i = 0; i < resultado.length; i++) {
        alert(resultado[i]);
    }