// List of responses for the AI to use
const responses = {
  greeting: [
    "Hello there! I'm the Solid Octo Tribble!",
    "Hi! How can I make your day brighter?",
    "Greetings, human friend!",
  ],
  question: [
    "That's an interesting question! Let me think...",
    "I wish I had all the answers, but I'm just a cute Tribble!",
    "Hmm, maybe you can teach me the answer!",
  ],
  compliment: [
    "Aww, you're so kind!",
    "Thank you! You're amazing too!",
    "Yay! Compliments fuel my happiness!",
  ],
  fallback: [
    "I'm not sure how to respond to that, but I love chatting!",
    "Can you tell me more? I want to understand!",
    "You're awesome for talking to me!",
  ],
};

// Function to determine the type of input and respond
function getAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return getRandomResponse(responses.greeting);
  } else if (
    input.includes("how") ||
    input.includes("why") ||
    input.includes("what") ||
    input.includes("when")
  ) {
    return getRandomResponse(responses.question);
  } else if (
    input.includes("cute") ||
    input.includes("awesome") ||
    input.includes("amazing")
  ) {
    return getRandomResponse(responses.compliment);
  } else {
    return getRandomResponse(responses.fallback);
  }
}

// Helper function to get a random response from a category
function getRandomResponse(category) {
  const randomIndex = Math.floor(Math.random() * category.length);
  return category[randomIndex];
}

// Function to handle user input and display AI response
function handleUserInput() {
  const userInput = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  if (userInput.trim() === "") return; // Ignore empty input

  // Display user input
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = `You: ${userInput}`;
  chatBox.appendChild(userMessage);

  // Get and display AI response
  const aiResponse = getAIResponse(userInput);
  const aiMessage = document.createElement("div");
  aiMessage.className = "message ai";
  aiMessage.textContent = `Tribble: ${aiResponse}`;
  chatBox.appendChild(aiMessage);

  // Clear input field and scroll chat box to the bottom
  document.getElementById("userInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
