const botao = document.getElementById('botao');


function mudarTextoDoParagrafo(){
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.innerText = 'Olá Mundo!';
}

botao.addEventListener('click', mudarTextoDoParagrafo);
