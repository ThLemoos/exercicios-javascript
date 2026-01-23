// Aprovado ou reprovado

let n1 = Number(prompt('Digite a sua nota do primeiro semestre: '));
let n2 = Number(prompt('Digite a sua nota do segundo semestre: '));
let n3 = Number(prompt('Digite a sua nota do terceiro semestre: '));
let n4 = Number(prompt('Digite a sua nota do quarto semestre: '));

const resultado = (n1 + n2 + n3 + n4) / 4;

if (Number.isNaN(resultado)) {
    alert('Digite em todos os campos apenas números!');
} else if (resultado >= 5 && resultado <= 10) {
    alert('Aprovado!');
} else if (resultado >= 11) {
    alert('O valor máximo para resultado das notas é de 10, reveja suas notas!');
} else if (resultado === 0) {
    alert('REPROVADO COM NOTA ZERO!');
} else {
    alert('Reprovado!');
}