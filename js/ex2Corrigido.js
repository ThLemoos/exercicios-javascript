let n1 = Number(prompt('Digite a sua nota do primeiro semestre: '));
let n2 = Number(prompt('Digite a sua nota do segundo semestre: '));
let n3 = Number(prompt('Digite a sua nota do terceiro semestre: '));
let n4 = Number(prompt('Digite a sua nota do quarto semestre: '));

if (
    Number.isNaN(n1) ||
    Number.isNaN(n2) ||
    Number.isNaN(n3) ||
    Number.isNaN(n4)
) {
    alert('Digite apenas números válidos em todas as notas!');
} else {
    const resultado = (n1 + n2 + n3 + n4) / 4;

    if (resultado === 0) {
        alert('REPROVADO COM NOTA ZERO!');
    } else if (resultado > 10) {
        alert('O valor máximo da média é 10, reveja suas notas!');
    } else if (resultado >= 5) {
        alert('Aprovado!');
    } else {
        alert('Reprovado!');
    }
}
