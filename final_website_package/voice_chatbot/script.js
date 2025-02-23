const chatBox = document.getElementById("chat-box");
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.continuous = false;

function startListening() {
    recognition.start();
    addMessage("You: 🎙️ (Listening...)", "user");
}

recognition.onresult = (event) => {
    const userInput = event.results[0][0].transcript;
    addMessage("You: " + userInput, "user");
    getBotResponse(userInput);
};

function addMessage(message, sender) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    let response = "I'm still learning. Can you rephrase?";
    if (userInput.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("career")) {
        response = "I can help you explore career options! What are your interests?";
    } else if (userInput.toLowerCase().includes("bye")) {
        response = "Goodbye! Have a great day.";
    }
    addMessage("Bot: " + response, "bot");
    speak(response);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}