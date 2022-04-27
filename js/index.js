// Constants
const languidLavender = '#d8cdd5ff';
const shadowBlue = '#7783a3ff';
const purpleNavy = '#454872ff';
const bananaMania ='#ecdcabff';
const pistachio = '#abd27fff';

const main_div_selector = ".main";


document.querySelector("#start_button").onclick = () => {
    clear_div(main_div_selector);
    name_screen(main_div_selector);
}

function selection_screen() {
    // Retrieve selector of main 
    var main_div = document.querySelector(main_div_selector);
    main_div.style.padding = "3em 0";

    // Add header
    add_h1(getCookie('name') + ", choose your path")

    // Create choice container
    var choices_container = document.createElement('div');
    choices_container.setAttribute('class', 'choices_container');
    choices_container.style.display = 'flex';
    choices_container.style.flexFlow = 'row wrap';
    choices_container.style.marginBottom = '5em';

    // Create and add choices to container
    for (let i = 0; i < 3; i++) {
        var choice_wrapper = document.createElement('div');
        var choice = document.createElement('div');

        choice_wrapper.setAttribute('class', 'choice_wrapper');
        choice.setAttribute('id', 'choice_' + i);
        
        let banner_image = i + ".jpg";
        choice.style.backgroundImage = "url(../resources/banner_" + banner_image + ")";
        choice.style.backgroundSize = "cover";
        
        choice.style.width = "300px";
        choice.style.height = "700px";
        choice.style.margin = "0 1em";
        choice.style.cursor = "pointer";

        choice.onclick = (choice) => {
            switch (choice.target.id) {
                case 'choice_0':
                    add_cookie("choice", "blacksmith");
                    window.location.href="pages/quiz/multiple_choice/index.html";
                    add_submit_button();
                    break;
                case 'choice_1':
                    add_cookie("choice", "academic");
                    window.location.href="../pages/quiz/multiple_choice/index.html";
                    break;
                case 'choice_2':
                    add_cookie("choice", "soldier");
                    window.location.href="../pages/quiz/multiple_choice/index.html";
                    break;
            }
        };

        choice_wrapper.style.clipPath = "polygon(100% 0, 0 0, 0 90%, 50% 100%, 100% 90%)"; //https://bennettfeely.com/clippy/
        choice_wrapper.style.filter = "drop-shadow(12px 16px 5px rgba(0,0,0,0.5))";

        choice_wrapper.appendChild(choice);
        choices_container.appendChild(choice_wrapper)

    }

    // Append to main
    main_div.appendChild(choices_container)
}

function name_screen() {
    let main_div = document.querySelector(main_div_selector);

    add_h1('What is your name?');

    // Create form
    let form = document.createElement('form');
    let input_field = document.createElement('input');
    input_field.setAttribute('class', 'input_field');

    input_field.addEventListener('keypress', (event) => {
        if (event.key == "Enter") {
            selection_onclick(event);
        } 
    });
    
    input_field.addEventListener('input', (input_event) => {
        if (input_event.target.value) {
            document.querySelector("#submit_button").style.display = 'block';
        } else {
            document.querySelector("#submit_button").style.display = 'none';
        }
    });

    input_field.setAttribute('type', 'text');
    input_field.style.width = '20vw';
    input_field.style.padding = '1em';
    input_field.style.fontSize = '1em';
    input_field.style.backgroundColor = languidLavender;
    input_field.style.borderRadius = '0.2em';
    input_field.style.border = 'none';
    
    form.appendChild(input_field);
    main_div.appendChild(form);

    add_submit_button(main_div_selector);
}

function add_h1(string) {
    let main_div = document.querySelector(main_div_selector);

    // Create H1
    let title = document.createElement('h1');
    let title_text = document.createTextNode(string);

    // Append to main
    title.appendChild(title_text);
    main_div.appendChild(title);
}

function add_submit_button() {
        // Add button
        let main_div = document.querySelector(main_div_selector);
        let submit = document.createElement('a');
        let text = document.createTextNode('Submit');
    
        submit.setAttribute('id', 'submit_button');
        submit.style.margin = '1em';
        submit.style.padding = '1em';
        submit.style.display = 'none';
        submit.appendChild(text);
        submit.onclick = (event) => {
            selection_onclick(event);
        }

        main_div.appendChild(submit);
}

function selection_onclick(event) {
    if (document.querySelector('.input_field')) {
        clearCookies();
        add_cookie("name", document.querySelector('.input_field').value);
        clear_div(main_div_selector);
        selection_screen(main_div_selector);
    } else {
        event.preventDefault();
    }
}
