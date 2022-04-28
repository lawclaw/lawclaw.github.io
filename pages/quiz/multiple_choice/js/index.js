// Constants
const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";

// Quiz variables
let questions = [];
let hp = 5;
let correct_answer = -1;
let current_question_number = 0;
let total_questions_answered = 0;

/**
 * Executed whenever the page is loaded
 */
window.onload = () => {
    display_hp(hp);
    set_choices_onclick();
    questions = retrieve_multiple_choice_questions(getCookie('choice'));  
    display_multiple_choice_question();
}

/**
 * Adds n number of hearts to navbar
 * @param {number} hp 
 */
function display_hp(hp) {
    let navbar = document.querySelector('.navbar');
    let heart_container = document.querySelector(".heart_container");
    if (!document.querySelector(".heart_container")) {
        heart_container = document.createElement('div');
    }
    
    heart_container.setAttribute('class', 'heart_container');
    for (let i = 0; i < hp; i++) {
        let img  = document.createElement('img');
        img.setAttribute("src", "../../../resources/heart.png");
        img.setAttribute("object-fit", 'contain');
        heart_container.appendChild(img);
    }
    navbar.appendChild(heart_container);
}

/**
 * Set .choices onclick event listener
 */
function set_choices_onclick() {
    let divs = document.querySelectorAll('.choice');    //https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
    [].forEach.call(divs, (div, index) => {
        div.onclick = () => {
            foundCorrectAnswer = index == correct_answer;
            if (foundCorrectAnswer) {
                current_question_number++;
                total_questions_answered++;
                display_multiple_choice_question();
            } else {
                original_bg = div.style.backgroundColor;
                div.style.backgroundColor = "#fc5361";
                setTimeout(() => { div.style.backgroundColor = original_bg; }, 300);
                hp--;
                if (hp <= 0) {
                    add_cookie("n_questions", total_questions_answered);
                    window.location.href = "../deathscreens/index.html";
                }
                clear_div('.heart_container');
                display_hp(hp);
            }
        }
    });
}


/** 
 * Displays the next multiple choice question
 */
function display_multiple_choice_question() {
    if (questions[current_question_number] === undefined) {    // If multiple choice questions are finished
        load_written_questions();
        return;
    }
    let main_div = document.querySelector(main_div_selector);

    let article = main_div.children[1];
    let questionHeader = article.querySelector("h2");
    questionHeader.textContent = "Question " + (current_question_number + 1) + ": " + questions[current_question_number].question;
    let contextPara = article.querySelector("p");
    contextPara.innerHTML = questions[current_question_number].context;

    let answers = document.querySelector(".choices");
    for (let i = 0; i < 4; i++) {
        let aTag = answers.children[i];
        aTag.innerHTML = questions[current_question_number].answers[i];
    }

    correct_answer = questions[current_question_number].correct_answer;
}
