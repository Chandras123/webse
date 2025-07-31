const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatWindow = document.getElementById('chatWindow');

chatForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = userInput.value.trim();
  if (message === '') return;

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'user-message';
  userMsg.textContent = message;
  chatWindow.appendChild(userMsg);

  // Clear input
  userInput.value = '';

  // Auto-scroll
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Add bot response (fake delay for realism)
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-message';
    botMsg.textContent = getBotReply(message);
    chatWindow.appendChild(botMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 600);
});

// Dummy bot reply function
function getBotReply(input) {
  const lower = input.toLowerCase();
  if (lower.includes('docker')) return 'Docker is a tool that packages your code and dependencies into containers.';
  if (lower.includes('hello')) return 'Hi there! 👋 How can I assist you today?';
  if (lower.includes('search')) return 'I can help you build a search feature with HTML and JavaScript.';
  return "I'm still learning! 🤖 Please ask something else.";
}
