const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";

window.onload = () => {
    choices_onclick();
}

function choices_onclick() {
    let divs = document.querySelectorAll('.choice');    //https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
    [].forEach.call(divs, (div) => {
        div.onclick = () => {
            alert("Hello");
        }
    });
}

// Helper function: Clears selected div of content
function clear_div(selector) {
    let div = document.querySelector(selector);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }    
}

function add_cookie(key, value) {
    document.cookie = key + "=" + value + ";";
}