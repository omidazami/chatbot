// create a dictionary of possible responses
const responses = {
  "hi": ["Hi there!", "Hello!", "Greetings!"],
  "hello": ["Hi there!", "Hello!", "Greetings!"],
  "how are you?": ["I'm doing well, thanks for asking.", "I'd be better if I was human like you!", "I'm a computer program, so I don't really have feelings, but thanks for asking!"],
  "whats your name?": ["My name is ChatBot.", "I'm ChatBot - nice to meet you!", "Call me ChatBot :)"],
  "what's your name?": ["My name is ChatBot.", "I'm ChatBot - nice to meet you!", "Call me ChatBot :)"],
  "bye": ["Goodbye!", "See you later!", "Bye!"],
};

// create a list of possible responses
const generalResponses = [
  "Interesting, tell me more.",
  "Hmmm.",
  "I see.",
  "Fascinating.",
  "Go on...",
  "And then what happened?",
  "I'm not sure I understand. Can you explain further?",
  "That's really something.",
  "Wow, I didn't expect that!",
];

// define a function that returns a random response
function respond(message) {
  // convert message to lowercase to avoid case sensitivity
  message = message.toLowerCase();
  
  // check if the message is in the responses dictionary
  if (message in responses) {
    return responses[message][Math.floor(Math.random() * responses[message].length)];
  } else {
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  }
}

// get references to the HTML elements
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("chat-input");
const chatLog = document.getElementById("chat-output");

// add event listener for form submission
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  const chatBotResponse = respond(message);
  addChatMessage("You", message);
  addChatMessage("ChatBot", chatBotResponse);
  messageInput.value = "";
});

// function to add a message to the chat log
function addChatMessage(sender, message) {
  const chatMessage = document.createElement("p");
  chatMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatLog.appendChild(chatMessage);
}
