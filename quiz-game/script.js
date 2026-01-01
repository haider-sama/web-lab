const questions = [
    {
        question: "In which anime series is Ash Ketchum the main character?",
        answers: [
            { text: "Eyeshield 21", correct: false},
            { text: "Pokémon", correct: true},
            { text: "Cowboy Bebop", correct: false},
            { text: "Super Dimension Fortress Macross", correct: false},
        ]
    },
    {
        question: "Dragon Ball was created by who in 1984?",
        answers: [
            { text: "Akira Toriyama", correct: true},
            { text: "Satoshi Tajiri", correct: false},
            { text: "Hirohiko Araki", correct: false},
            { text: "Hayao Miyazaki", correct: false},
        ]
    },
    {
        question: "What is the name of Studio Ghibli’s well-known mascot?",
        answers: [
            { text: "Kiki", correct: false},
            { text: "Bakura", correct: false},
            { text: "Ponyo", correct: false},
            { text: "Totoro", correct: true},
        ]
    },
    {
        question: "In ‘Sailor Moon’ the anime character Makoto Kino transforms",
        answers: [
            { text: "Sailor Mercury", correct: false},
            { text: "Sailor Venus", correct: false},
            { text: "Sailor Jupiter", correct: true},
            { text: "Sailor Mars", correct: false},
        ]
    },
    {
        question: " In ‘Naruto’, the main character, Naruto Uzumaki, is a host for the powerful Nine-Tales. What creature is the Nine-Tails?",
        answers: [
            { text: "Wolf", correct: false},
            { text: "Fox", correct: true},
            { text: "Bear", correct: false},
            { text: "Cat", correct: false},
        ]
    },
    {
        question: "Yubaba is a witch in which animated film written and directed by Hayao Miyazaki?",
        answers: [
            { text: "Castle in the Sky", correct: false},
            { text: "Ocean Waves", correct: false},
            { text: "Pom Poko", correct: false},
            { text: "Spirited Away", correct: true},
        ]
    },
    {
        question: "Which anime series is set in the world of Amestris?",
        answers: [
            { text: "Naruto", correct: false},
            { text: "Fullmetal Alchemist", correct: true},
            { text: "Sailor Moon", correct: false},
            { text: "Pokemon", correct: false},
        ]
    },
    {
        question: "In ‘Howl’s Moving Castle’, Sophie is transformed into an old woman by a witch. How old is Sophie as an old woman?",
        answers: [
            { text: "75 years old", correct: false},
            { text: "87 years old", correct: false},
            { text: "90 years old", correct: true},
            { text: "101 years old", correct: false},
        ]
    },
    {
        question: "In ‘One Piece’, Monkey D. Luffy originally sets out with the Straw Hat Pirates to become the pirate king on which ship?",
        answers: [
            { text: "Going Merry", correct: true},
            { text: "Jolly Roger", correct: false},
            { text: "Thousand Sunny", correct: false},
            { text: "Ever Darker", correct: false},
        ]
    },
    {
        question: "Which planet is also known as the Dragon World in ‘Dragon Ball’?",
        answers: [
            { text: "Earth", correct: true},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: false},
            { text: "Neptune", correct: false},
        ]
    },
    {
        question: "Which series is set in the dark underworld of Victorian London?",
        answers: [
            { text: "Phantomhive", correct: false},
            { text: "Black Butler", correct: true},
            { text: "Valkyria Chronicles", correct: false},
            { text: "Blue Exorcist", correct: false},
        ]
    },
    {
        question: "In which anime series are Chief Daisuke Aramaki and Major Motoko Kusanag two of the main characters?",
        answers: [
            { text: "Paranoia Agent", correct: false},
            { text: "Dominion", correct: false},
            { text: "Ghost in the Shell", correct: true},
            { text: "Fullmetal Alchemist", correct: false},
        ]
    },
    {
        question: "Which sport is the focus of ‘Eyeshield 21’?",
        answers: [
            { text: "Baseball", correct: false},
            { text: "American Football", correct: true},
            { text: "Tennis", correct: false},
            { text: "Soccer", correct: false},
        ]
    },
    {
        question: "In ’Cowboy Bebop’ Ein is a genetically engineered dog with human levels of intelligence. Which breed of dog is Ein?",
        answers: [
            { text: "Great Dane", correct: false},
            { text: "Cavalier King Charles Spaniel", correct: false},
            { text: "Dachshund", correct: false},
            { text: "Pembrokeshire Welsh Corgi", correct: true},
        ]
    },
    {
        question: "Which one of the following series is about time travel?",
        answers: [
            { text: "Steins;Gate", correct: true},
            { text: "Darker than Black", correct: false},
            { text: "City Hunter", correct: false},
            { text: "Devilman", correct: false},
        ]
    },
    {
        question: "Which of these original anime series has NOT been turned into a movie?",
        answers: [
            { text: "JoJo's Bizarre Adventure", correct: false},
            { text: "Alita: Battle Angel", correct: false},
            { text: "Chubby Baby", correct: false},
            { text: "Kingdom", correct: true},
        ]
    },
    {
        question: "In Dragon Ball Super, Goku is sent to destroy earth. What random thing happened to make him change his mind?",
        answers: [
            { text: "He became a knight", correct: false},
            { text: "He banged his head", correct: true},
            { text: "He learned the ways of the samurai", correct: false},
            { text: "He got bored and gave up", correct: false},
        ]
    },
    {
        question: "What kind of wizard is Lucy in 'Fairy Tail'?",
        answers: [
            { text: "Star Wizard", correct: false},
            { text: "Fire Wizard", correct: false},
            { text: "Sky Wizard", correct: false},
            { text: "Celestial Wizard", correct: true},
        ]
    },
    {
        question: "Who defeated Madara Uchiha in 4th Great Ninja War in Naruto?",
        answers: [
            { text: "Naruto Uzumaki", correct: false},
            { text: "Guy", correct: false},
            { text: "Sasuke", correct: false},
            { text: "No one. He is unbeatable", correct: true},
        ]
    },
    {
        question: "By number, which country has the most anime/manga fans in the world?",
        answers: [
            { text: "Japan", correct: true},
            { text: "Brazil", correct: false},
            { text: "South Korea", correct: false},
            { text: "United States", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();

    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();