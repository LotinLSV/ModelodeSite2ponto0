
function ocultaSecao() {
    document.getElementById('secao-login').style.display = "none";
}

function mostraSecao() {
    document.getElementById('secao-login').style.display = "block";
}

function ocultaContato() {
    document.getElementById('box-contato').style.display = "none";
}

function mostraContato() {
    document.getElementById('box-contato').style.display = "block";
}

function adicionaObjeto() {
    var elemento_pai = document.getElementById('dv1');
    var titulo = document.createElement('h1');
    var texto = document.createTextNode('um texto de exemplo');
    titulo.appendChild('texto');
    elemento_pai.appendChild('titulo');
}