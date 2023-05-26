
const fs = require('fs');
fs.readFile('./Users.json', 'utf-8', (error, dados) =>{
const obj = JSON.parse(dados);
console.log(obj);
});
function verdadosjson() {

    fs.readFile('./Users.json', 'utf-8', (error, dados) =>{
        const obj = JSON.parse(dados);
        console.log(obj);
    })
    }
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

