/**
 * Loads written questions
 */
function load_written_questions() {
    generate_written_question_ui();
    set_submit_button_onclick();
    set_field_keypress();
    questions = retrieve_written_questions(getCookie('choice'));
    current_question_number = 0;
    display_written_question();
}

/**
 * Displays the next written question
 */
function display_written_question() {
    if (questions[current_question_number] === undefined) {    // If written questions are finished
        window.location.href = "../victoryscreens/index.html"
    }

    let main_div = document.querySelector(main_div_selector);

    let article = main_div.children[1];
    let questionHeader = article.querySelector("h2");
    questionHeader.textContent = "Question " + (current_question_number + 1) + ": " + questions[current_question_number].question;
    let contextPara = article.querySelector("p");
    contextPara.innerHTML = questions[current_question_number].context;

    correct_answer = questions[current_question_number].correct_answer;
}


/**
 * Creates necessary elements for displaying written questions
 */
function generate_written_question_ui() {
    clear_div(main_div_selector);

    const header = document.createElement("h1");
    header.append(document.createTextNode("Chapter 2"));

    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.append(document.createTextNode("Question num"));
    const p = document.createElement("p");
    p.append(document.createTextNode("context"));
    article.append(h2);
    article.append(p);

    const form = document.createElement("form");
    const field = document.createElement("input");
    field.setAttribute("class", "input_field");
    field.setAttribute("type", "text");
    const a = document.createElement("a");
    a.textContent = "Submit";
    a.setAttribute("id", "submit_button");
    form.append(field, a);

    const main_div = document.querySelector(main_div_selector);
    main_div.append(header, article, form);
}


// Event listeners

/**
 * Sets the onclick for #submit_button
 */
function set_submit_button_onclick() {
    const submit_button = document.querySelector("#submit_button");
    submit_button.addEventListener('click', (event) => {
        answer_button_onclick(event);
    });
}

/**
 * Sets the onclick for .input_field
 */
function set_field_keypress() {
    const input_field = document.querySelector(".input_field");
    input_field.addEventListener('keypress', (event) => {
        if (event.key == "Enter") {
            if (event.target.value == null || event.target.value == "") // Null or empty input
            {
                event.preventDefault();
                return;
            }
            
            if (event.target.value == correct_answer) // Answer checking
            {
                current_question_number++;
                display_written_question();
            } else {
                hp--;
                if (hp <= 0) {
                    window.location.href = "../deathscreens/index.html";
                }
                clear_div('.heart_container');
                display_hp(hp);
            }
            
            event.preventDefault();
            clear_field(".input_field");        
        } 
    });
}


