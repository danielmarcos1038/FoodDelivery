let frango;

function selecionar (frangoClicado) {
    const botaoSelecionado = document.querySelector('.prato .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    frangoClicado.classList.add('selecionado');

    frango = frangoClicado;

    habilitarBotaoContinuar();
}

let coca;

function selecionar1(cocaClicada) {
    const botaoSelecionado = document.querySelector('.bebida .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    cocaClicada.classList.add('selecionado');

    coca = cocaClicada;

    habilitarBotaoContinuar();
}

let pudim;

function selecionar2(pudimClicado) {
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    pudimClicado.classList.add('selecionado');

    pudim = pudimClicado;

    habilitarBotaoContinuar();
}

let frango1;
let frango11;
let frangoPreco;
let coca1;
let cocaPreco;
let pudim1;
let pudimPreco;
let total;
let totalPreco;
let fran;

function habilitarBotaoContinuar() {
    if (frango !== undefined) {
        if (coca !== undefined) {
            if (pudim !== undefined) {
                const botaoContinuar = document.querySelector('.rodape');
                botaoContinuar.classList.add('escondido');
                const botaoContinuar1 = document.querySelector('.rodape1');
                botaoContinuar1.classList.remove('escondido');

                frango1 = frango.getElementsByTagName('h3')[0].innerHTML;
                frangoPreco = frango.getElementsByTagName('p')[1].innerHTML;

                coca1 = coca.getElementsByTagName('h3')[0].innerHTML;
                cocaPreco = coca.getElementsByTagName('p')[1].innerHTML;

                pudim1 = pudim.getElementsByTagName('h3')[0].innerHTML;
                pudimPreco = pudim.getElementsByTagName('p')[1].innerHTML;

                total = pudim.getElementsByTagName('h3')[0].innerHTML;

            }
        }
    }
}

let nome1;

function painel () {
    const painelEscondido = document.querySelector('.alerta');
    painelEscondido.classList.remove('escondido');

    nome1 = document.getElementsByClassName('comida')[0];
    nome1.innerHTML = `${frango1}`
    nome1Preco = document.getElementsByClassName('comida-preco')[0];
    nome1Preco.innerHTML = `${frangoPreco}`

    nome2 = document.getElementsByClassName('bebida-selec')[0];
    nome2.innerHTML = `${coca1}`
    nome2Preco = document.getElementsByClassName('bebida-preco')[0];
    nome2Preco.innerHTML = `${cocaPreco}`

    nome3 = document.getElementsByClassName('doce')[0];
    nome3.innerHTML = `${pudim1}`
    nome3Preco = document.getElementsByClassName('doce-preco')[0];
    nome3Preco.innerHTML = `${pudimPreco}`

    let novoPonto = frangoPreco.replace('R$', '');
    let novoPonto1 = cocaPreco.replace('R$', '');
    let novoPonto2 = pudimPreco.replace('R$', '');

    let result = Number(novoPonto) + Number(novoPonto1) + Number(novoPonto2)
    console.log(novoPonto, novoPonto1, novoPonto2)

    totalPreco = document.getElementsByClassName('total-preco')[0];
    totalPreco.innerHTML = `R$ ${result.toFixed(2)}`
}   

function whats() {
    let mensagem = `Olá, gostaria de fazer o pedido:
                    - Prato: ${nome1.innerHTML}
                    - Bebida: ${nome2.innerHTML}
                    - Sobremesa: ${nome3.innerHTML}
                    Total: R$ ${totalPreco.innerHTML}`
    let uri = encodeURIComponent(mensagem)
    window.open('https://wa.me/5512992556506?text=%27'+uri)
}

function hide() {
    let funcao = window.document.querySelector('.alerta')
    funcao.classList.add('escondido')
}