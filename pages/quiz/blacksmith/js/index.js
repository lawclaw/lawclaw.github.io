const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";

let questions = [];
let hp;
let correct_answer = 1;
let current_question = 0;

window.onload = () => {
    load_hp();
    draw_hp(hp);
    choices_onclick();
    questions = retrieve_multiple_choice_questions(getCookie('choice'));  
    display_multiple_choice_question();
}

function draw_hp(hp) {
    let navbar = document.querySelector('.navbar');
    let heart_container = document.querySelector(".heart_container");
    if (!document.querySelector(".heart_container")) {
        heart_container = document.createElement('div');
    }
    heart_container.setAttribute('class', 'heart_container');
    for (let i = 0; i < hp; i++) {
        let img  = document.createElement('img');
        img.setAttribute("src", "../resources/heart.png");
        img.setAttribute("object-fit", 'contain');
        heart_container.appendChild(img);
    }
    navbar.appendChild(heart_container);

}

function choices_onclick() {
    let divs = document.querySelectorAll('.choice');    //https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
    [].forEach.call(divs, (div, index) => {
        div.onclick = () => {
            foundCorrectAnswer = index == correct_answer;
            if (foundCorrectAnswer) {
                current_question++;
                display_multiple_choice_question();
            } else {
                hp--;
                if (hp <= 0) {
                    window.location.href = "../deathscreens/index.html";
                }
                clear_div('.heart_container');
                draw_hp(hp);
            }
        }
    });
}



// Displays the next question
function display_multiple_choice_question() {
    if (questions[current_question] === undefined) {    // End of multiple choice questions
        add_cookie("hp", hp);
        window.location.href = "written_questions/index.html";
    }
    let main_div = document.querySelector(main_div_selector);
    let header = main_div.children[0];

    header.textContent = "Chapter " + (current_question + 1);

    let article = main_div.children[1];
    let questionHeader = article.querySelector("h2");
    questionHeader.textContent = "Question " + (current_question + 1) + ": " + questions[current_question].question;
    let contextPara = article.querySelector("p");
    contextPara.innerHTML = questions[current_question].context;

    let answers = document.querySelector(".choices");
    for (let i = 0; i < 4; i++) {
        let aTag = answers.children[i];
        aTag.innerHTML = questions[current_question].answers[i];
    }

    correct_answer = questions[current_question].correct_answer;

}


