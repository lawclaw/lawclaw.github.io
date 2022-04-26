function retrieve_multiple_choice_questions(career) {
    let questions = [];
    switch (career) {
        case "blacksmith":
            questions.push(
                new MultipleChoiceQuestion(
                    "What are the 3 Ways of DevOps?",
                    "As the child of a blacksmith, you have been given the task of forging your own blade. <br> But before you can start, you need to plan.",
                    [
                        "Development, Operations and Solutions",
                        "Flow, Feedback and Continuous Experimentation and Learning",
                        "Ugandan Knuckles",
                        "Conway's Game of Life"
                    ],
                    1
                ),
                new MultipleChoiceQuestion(
                    "Which one is NOT a Version Control System?",
                    "A design is always needed when forging. <br> But which one is the imposter?",
                    [
                        "Git",
                         "Mercurial",
                          "SVN",
                           "SUS"
                    ],
                    3
                ),
                new MultipleChoiceQuestion(
                    "Which one is oldest the hardware era?",
                    "You spot four different types of metal, however which one is the sturdiest?",
                    [
                        "Mainframe", 
                        "Backframe", 
                        "PC", 
                        "Mobile"
                    ],
                    0
                )
            );
            break;
        case "career2":
            break;
        case "career3":
            break;
    }

    return questions;
}

function retrieve_written_questions(career) {
    let questions = [];
    switch (career) {
        case "blacksmith":
            questions.push(
                new WrittenQuestion(
                    "What is the Japanese word for signboard/billboard?",
                    "You managed to craft a new sword and can now start your adventure. <br> But which sign should you follow next?",
                    "Kanban"
                ),
                new WrittenQuestion(
                    "In a Scrum team, what is the individual who decides work, called?",
                    "Your friends ask to join you on your journey. What is the leader called?",
                    "Product owner"
                )
            );
            break;
        case "career2":
            break;
        case "career3":
            break;
    }

    return questions;
}
