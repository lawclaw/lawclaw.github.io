const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";

window.onload = () => {
    display_score();
}

function display_score() {
    const h1 = document.querySelector("h1"); 
    h1.textContent += " " + getCookie("name");
    const p = document.querySelector("p");
    let line = "Total number of questions answered:" + getCookie("n_questions");
    p.innerHTML = line;
}
