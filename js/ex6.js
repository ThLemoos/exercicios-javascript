// Funcao de média
alert('Vamos verificar sua média');

const n1 = Number(prompt('Nota 1: '));
const n2 = Number(prompt('Nota 2: '));
const n3 = Number(prompt('Nota 3: '));
const n4 = Number(prompt('Nota 4: '));

function calcularMedia(n1, n2, n3, n4) {
    const resultado = (n1 + n2 + n3 + n4) / 4
    return resultado;
}

if (
    Number.isNaN(n1) ||
    Number.isNaN(n2) ||
    Number.isNaN(n3) ||
    Number.isNaN(n4)
) {
    alert('Digite apenas números em todos os campos!');
} else {
    const media = calcularMedia(n1, n2, n3, n4);

    if (media < 0) {
        alert(
            `Reprovado com nota negativa!\n
                Cálculo das notas: (${n1} + ${n2} + ${n3} + ${n4}) / 4\n
                Resultado: ${media.toFixed(1)}`
        );

    } else if (media === 0) {
        alert(
            `Reprovado com nota ZERO!\n
                Cálculo das notas: (${n1} + ${n2} + ${n3} + ${n4}) / 4\n
                Resultado: ${media.toFixed(1)}`
        );

    } else if (media >= 1 && media < 5) {
        alert(
            `Reprovado por falta de nota!\n
                Cálculo das notas: (${n1} + ${n2} + ${n3} + ${n4}) / 4\n
                Resultado: ${media.toFixed(1)}`
        );

    } else if (media >= 5 && media < 10) {
        alert(
            `Aprovado!\n
                Cálculo das notas: (${n1} + ${n2} + ${n3} + ${n4}) / 4\n
                Resultado: ${media.toFixed(1)}`
        );
    } else if (media === 10) {
        alert(
            `APROVADO COM NOTA 10!!!\n
                Cálculo das notas: (${n1} + ${n2} + ${n3} + ${n4}) / 4\n
                Resultado: ${media.toFixed(1)}
            `
        );
    } else {
        alert(`O valor para notas de média está entre 0 e 10. Você digitou algum número muito grande e errado!`)
    }

}