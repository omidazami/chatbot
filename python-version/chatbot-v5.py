import random

# create a dictionary of possible responses
responses = {
    "hi": ["Hi there!", "Hello!", "Greetings!"],
    "hello": ["Hi there!", "Hello!", "Greetings!"],
    "how are you?": ["I'm doing well, thanks for asking.", "I'd be better if I was human like you!", "I'm a computer program, so I don't really have feelings, but thanks for asking!"],
    "whats your name?": ["My name is ChatBot.", "I'm ChatBot - nice to meet you!", "Call me ChatBot :)"],
    "what's your name?": ["My name is ChatBot.", "I'm ChatBot - nice to meet you!", "Call me ChatBot :)"],
    "bye": ["Goodbye!", "See you later!", "Bye!"],
}

# create a list of possible responses
general_responses = [
    "Interesting, tell me more.",
    "Hmmm.",
    "I see.",
    "Fascinating.",
    "Go on...",
    "And then what happened?",
    "I'm not sure I understand. Can you explain further?",
    "That's really something.",
    "Wow, I didn't expect that!",
]

# define a function that returns a random response
def respond(message):
    # convert message to lowercase to avoid case sensitivity
    message = message.lower()
    
    # check if the message is in the responses dictionary
    if message in responses:
        return random.choice(responses[message])
    else:
        return random.choice(general_responses)

# main loop to keep the chatbot running
while True:
    message = input("You: ")
    if message.lower() == "bye":
        print("ChatBot: " + respond(message))
        break
    else:
        print("ChatBot: " + respond(message))
