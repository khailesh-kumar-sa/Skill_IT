const questions = [
    { question: "Do you enjoy working with numbers and data?", field: "Analytical" },
    { question: "Do you prefer creative tasks like designing or writing?", field: "Creative" },
    { question: "Are you interested in managing people and projects?", field: "Leadership" },
    { question: "Do you enjoy helping others solve problems?", field: "Social" },
    { question: "Would you like to work with technology and software?", field: "Technical" },
    { question: "Do you like exploring new technologies and innovations?", field: "Technical" },
    { question: "Do you enjoy logical problem-solving tasks?", field: "Analytical" },
    { question: "Do you prefer working in teams over individual tasks?", field: "Social" },
    { question: "Are you interested in marketing and sales strategies?", field: "Leadership" },
    { question: "Do you find programming and software development exciting?", field: "Technical" },
    { question: "Would you like to work in a healthcare-related career?", field: "Social" },
    { question: "Are you interested in finance and investments?", field: "Analytical" },
    { question: "Do you prefer designing user interfaces or user experiences?", field: "Creative" },
    { question: "Are you interested in cybersecurity and ethical hacking?", field: "Technical" },
    { question: "Would you like to work in research and development?", field: "Analytical" },
    { question: "Do you enjoy content creation, blogging, or vlogging?", field: "Creative" },
    { question: "Do you find data analysis and statistics interesting?", field: "Analytical" },
    { question: "Would you enjoy being a mentor, coach, or teacher?", field: "Social" },
    { question: "Are you interested in business strategy and management?", field: "Leadership" },
    { question: "Do you enjoy robotics and automation technologies?", field: "Technical" }
];

let currentQuestionIndex = 0;
let responses = {};

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    if (currentQuestionIndex < questions.length) {
        questionContainer.innerHTML = `<p>${questions[currentQuestionIndex].question}</p>
        <button onclick="selectAnswer('Yes')">Yes</button>
        <button onclick="selectAnswer('No')">No</button>`;
    } else {
        showResults();
    }
}

function selectAnswer(answer) {
    const field = questions[currentQuestionIndex].field;
    responses[field] = (responses[field] || 0) + (answer === 'Yes' ? 1 : 0);
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const questionContainer = document.getElementById("question-container");
    let resultField = Object.keys(responses).reduce((a, b) => responses[a] > responses[b] ? a : b, "Undefined");
    questionContainer.innerHTML = `<h2>Your Interest Field: ${resultField}</h2>`;
    document.getElementById("done-btn").style.display = "block";
}

function goBack() {
    window.history.back();
}