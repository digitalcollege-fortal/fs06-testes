function somar(n1, n2) {
    return n1 + n2;
}

function welcome(nome) {
    return `welcome ${nome}`;
}

welcome('Daniel');

compararValores(15, somar(10, 5));
compararValores('Welcome Daniel', welcome('Daniel'));


function compararValores(valorEsperado, valorAtual) {
    if (valorEsperado !== valorAtual) {
        console.log('----------------------');
        console.log('--- ERRO NA FUNÇÃO ---');
        console.log('----------------------');

        return;
    }

    console.log('O teste passou!');
}


