const botaoCurtir =  document.getElementById('Curtir');
const botaoDescurtir = document.getElementById('Descurtir');
const curtidas = document.getElementById('Curtidas');

botaoCurtir.addEventListener('click', curtir);
botaoDescurtir.addEventListener('click', descurtir);

let quantidadesCurtidas = 0;

function curtir() {
    quantidadesCurtidas++;
    curtidas.innerText = "Curtidas: " + quantidadesCurtidas;
}

function descurtir() {
    if (quantidadesCurtidas > 0) {
        quantidadesCurtidas--;
    }
    curtidas.innerText = "Curtidas: " + quantidadesCurtidas;
}
