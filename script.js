
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value;
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    document.getElementById('messages').innerHTML += `<div><strong>You:</strong> ${message}</div><div><strong>Assistant:</strong> ${data.reply}</div>`;
    input.value = '';
}
