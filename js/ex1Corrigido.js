let idade = Number(prompt('Digite a sua idade: '));

if (Number.isNaN(idade)) {
    alert('Digite um número válido!');
} else if (idade <=0 ) {
    alert('Não existe idade com número nulo ou negativo!');
} else if (idade >= 18 && idade <= 122) {
    alert('Você é maior de idade!');
} else if (idade > 122) {
    alert('Não existe nenhum ser humano que chegue a essa idade');
} else {
    alert('Você é menor de idade!');
}