const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";

let questions = [];
let hp;
let correct_answer = "Kanban";
let current_question = 0;

window.onload = () => {
    load_hp();
    draw_hp(hp);
    set_event_listener();
    questions = retrieve_written_questions("blacksmith");    
    display_written_question();
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
        img.setAttribute("src", "../../resources/heart.png");
        img.setAttribute("object-fit", 'contain');
        heart_container.appendChild(img);
    }
    navbar.appendChild(heart_container);

}

// Displays the next question
function display_written_question() {
    if (questions[current_question] === undefined) {    // End of multiple choice questions
        alert("end of questions");
        return;
    }
    let main_div = document.querySelector(main_div_selector);
    let header = main_div.children[0];

    header.textContent = "Chapter " + (current_question + 1);

    let article = main_div.children[1];
    let questionHeader = article.querySelector("h2");
    questionHeader.textContent = "Question " + (current_question + 1) + ": " + questions[current_question].question;
    let contextPara = article.querySelector("p");
    contextPara.innerHTML = questions[current_question].context;

    correct_answer = questions[current_question].correct_answer;
}

function answer_button_onclick(event) {
    const input_field_selector = ".input_field";
    const input_field = document.querySelector(input_field_selector);
    const input = input_field.value;
    if (input == null || input == "") {
        return;
    }
    if (input == questions[current_question].correct_answer) {
        current_question++;
        display_written_question();
    } else {
        hp--;
        if (hp <= 0) {
            window.location.href = "../../deathscreens/index.html";
        }
        clear_div('.heart_container');
        draw_hp(hp);
    }
    clear_field(input_field_selector);
}

function answer_enter_onclick(event) {
    if (event.target.value == null || event.target.value == "") {
        event.preventDefault();
        return;
    }
    if (event.target.value == correct_answer) {
        current_question++;
        display_written_question();
    } else {
        hp--;
        if (hp <= 0) {
            window.location.href = "../../deathscreens/index.html";
        }
        clear_div('.heart_container');
        draw_hp(hp);
    }
    event.preventDefault();
    clear_field(".input_field");

}

function set_event_listener() {
    const submit_button = document.querySelector("#submit_button");
    submit_button.addEventListener('click', (event) => {
        answer_button_onclick(event);
    });
    const input_field = document.querySelector(".input_field");
    input_field.addEventListener('keypress', (event) => {
        if (event.key == "Enter") {
            answer_enter_onclick(event);
        } 
    });
}
