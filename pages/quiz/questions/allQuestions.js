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
                        "Water, Earth, Fire, Air",
                        "Presentation, Business and Data"
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
        case "academic":
            questions.push(
                new MultipleChoiceQuestion(
                    "What is the process of restructuring existing computer code called?",
                    "You are on the last question of your magic test. <br> The last step before you can become an academic.",
                    [
                        "Refactoring",
                        "Restructuring",
                        "Reforming",
                        "Reiterating"
                    ],
                    0
                ),
                new MultipleChoiceQuestion(
                    "Which one is a modelling language",
                    "Finished with school, you are now given your first job to construct a building. <br> But what was the tool you used called?",
                    [
                        "UNL",
                        "UBL",
                        "JBL",
                        "UML"
                    ],
                    3
                ),
                new MultipleChoiceQuestion(
                    "Select the correct definition of 'code smell'",
                    "After drawing up schemas and calculating the costs of construction, you realize that there is something wrong with the ground",
                    [
                        "Dirty keyboard",
                        "Bug found in system",
                        "Underlying code problem",
                        "Messy code"
                    ],
                    2
                )
            );
            
            break;
        case "soldier":
            questions.push(
                new MultipleChoiceQuestion(
                    "What unit can be used to describe time complexity?",
                    "The enlistment time slot is today, but what time?",
                    [
                        "Big O",
                        "Big B",
                        "Big T",
                        "Big N"
                    ],
                    0
                ),
                new MultipleChoiceQuestion(
                    "What value does Continuous Integration provide?",
                    "After doing some tests, you've been placed into Unit CI <br> But what was your main goal?",
                    [
                        "Increases risk",
                        "Efficient integration",
                        "More repetitive tasks",
                        "Ability to create software at any point"
                    ],
                    3
                ),
                new MultipleChoiceQuestion(
                    "What is Information Visualization?",
                    "As the new member, you've been given guard duty.",
                    [
                        "Displaying information using paintings to boost brain power",
                        "Study of visual representations of abstract data to reinforce human cognition",
                        "Compiling information into a tangible and understandable format",
                        "Visualizing data in a GUI"
                    ],
                    1
                )
            )
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
        case "academic":
            questions.push(
                new WrittenQuestion(
                    "What is the expanded form of HTML?",
                    "After further investigation, you realize that a group of goblins are living under the ground. <br> They speak some language but what was it called again?",
                    "HyperText Markup Language"
                ),
                new WrittenQuestion(
                    "Which datat structure is based upon the contiguous allocation of memory?",
                    "You begin negotiation with the goblins, however they demand new living spaces.",
                    "Array"
                )
            );
            break;
        case "soldier":
            questions.push(
                new WrittenQuestion(
                    "'Querying a service to check properties', is an example of what type of monitoring?",
                    "During your shift, you've been tasked to test that all lights work.",
                    "Blackbox monitoring"
                ),
                new WrittenQuestion(
                    "In computer security users make up one role, what is the other role?",
                    "After checking multiple rooms you end up in a room with a red and blue switch",
                    "Hackers"
                ),
            )
            break;
    }

    return questions;
}
