// Função de validação

alert('Verificação de pessoa autorizada!');

let nome = prompt('Digite seu nome para verificação: ');

function validacaoPositiva(nomeDigitado) {
    const nomeAutorizado = 'Thiago';
    return nomeDigitado === nomeAutorizado;
}

if (/\d/.test(nome)) {
    alert('Digite apenas letras sem números!');
} else {

    const liberado = validacaoPositiva(nome);

    if (liberado) {
        alert(`Acesso liberado. Bem-vindo ${nome}!`);
        
    } else if (!liberado) {
        alert(`Acesso negado! Você não tem permissão ${nome}`);
    
    }
}
