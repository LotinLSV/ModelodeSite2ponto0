const { Translate } = require("embla-carousel/components/Translate");



const itens = document.getElementById('primeiro');

const item = document.querySelectorAll('#primeiro .c-d')

let idx = 0;

function carrosel(){
    idx++;
    if (idx > item.length - 1){
        idx = 0;
    }

    item.style.transform = 'TranslateX(${-idx * 20px})';

}


setInterval(carrosel, 1800);




function ocultaContato(){
    document.getElementById('box-contato').style.display = "none";
}

function mostraContato(){
    document.getElementById('box-contato').style.display = "block";
}