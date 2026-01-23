alert('Verificação de média anual para aprovação ou reprovação');

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
    alert('Digite apenas números em todos os campos, algum campo que você digitou tem alguma letra ou símbolo!')
} else {
    const resultado = (n1 + n2 + n3 + n4) / 4;

    if (resultado === 0) {
        alert(
            `REPROVADO COM NOTA ZERO!\nResultado do cálculo das suas notas: 
            (${n1} + ${n2} + ${n3} + ${n4}) / 4 = ${resultado}`
        )
    } else if (resultado >= 5 && resultado < 10) {
        alert(
            `Aprovado com média: ${resultado}.\nResultado do cálculo das suas notas:
            (${n1} + ${n2} + ${n3} + ${n4}) / 4 = ${resultado}`
        )
    } else if (resultado === 10) {
        alert(
            `PARABÉNS. VOCÊ ESTÁ APROVADO COM NOTA 10!!!\nResultado do cálculo das suas notas:
            (${n1} + ${n2} + ${n3} + ${n4}) / 4 = ${resultado}`
        )
    } else if (resultado > 10) {
        alert(
            `O número máximo para o valor da sua média é 10.\n
            Você digitou um número de nota errada ou grande demais!\n
            Notas digitadas (verifique onde está o erro):\n
            Nota 1: ${n1}\n
            Nota 2: ${n2}\n
            Nota 3: ${n3}\n
            Nota 4: ${n4}\n
            Soma e resultado: (${n1} + ${n2} + ${n3} + ${n4}) / 4 = ${resultado}`
        )
    } else {
        alert(
            `Reprovado!\nResultado do cálculo das suas notas:
            (${n1} + ${n2} + ${n3} + ${n4}) / 4 = ${resultado}`
        )
    }
}
