let numero = Number(prompt('Digite um número: '));

if (Number.isNaN(numero)) {
    alert('Digite apenas números!');
} else if (numero === 0) {
    alert('Zero é considerado um número neutro.');
} else if (numero > 0) {
    alert('É um número positivo!');
} else {
    alert('É um número negativo!');
}
