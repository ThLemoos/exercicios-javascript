let n = Number(prompt('Digite um número para saber sua tabuada até o 10'));

function calculo() {
    for (let i = 0; i <= 10; i++){
        alert(`${n} x ${i} = ${n * i}`);
    } 
}

calculo();



