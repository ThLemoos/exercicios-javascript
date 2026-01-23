// Verificar se é meior ou menor de idade
let idade = prompt('Digite sua idade');

if (idade >= 18 && idade < 122)  {
    alert('você é maior de idade!');
} else if  (idade <= 0) {
    alert('Não existe idade com número negativo ou nulo!!!');
} else if (idade > 122) {
    alert('Impossível alguém ter essa idade sendo humano!');
} else {
    alert('Você é menor de idade!');
}