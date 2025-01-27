document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setTimeout(hideWelcome, 3000);
});

function createStars() {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    document.body.appendChild(starContainer);
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starContainer.appendChild(star);
    }
}

function hideWelcome() {
    const welcomeElement = document.getElementById('welcome');
    welcomeElement.classList.add('hidden');
    setTimeout(() => { welcomeElement.style.display = 'none'; }, 1500);
}

function askDoYouKnowMe() {
    const name = document.getElementById('nameInput').value.trim();
    const birthdayMonth = document.getElementById('birthdayInput').value.toLowerCase();
    const responseDiv = document.getElementById('response');
    const messageForm = document.getElementById('messageForm');
    responseDiv.className = ''; // Reset class
    messageForm.className = 'hidden'; // Hide message form initially

    if (name === '' || birthdayMonth === '') {
        responseDiv.innerHTML = '<p class="surprise">👋 Hello, please enter your name and birthday month! 📝</p>';
        responseDiv.classList.add('animate');
        return;
    }

    responseDiv.innerHTML = `
        <p class="surprise">✨ Hello, ${name}...! Do you know me? ✨</p>
        <button class="button" onclick="askFriendship('${name}', '${birthdayMonth}', 'yes')">Yes</button>
        <button class="button" onclick="askFriendship('${name}', '${birthdayMonth}', 'no')">No</button>
    `;
    responseDiv.classList.add('animate'); // Add animation
}

function askFriendship(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    if (answer === 'yes') {
        responseDiv.innerHTML = `
            <p class="surprise">🌟 Would you like to be my friend? 🌟</p>
            <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'yes')">Yes</button>
            <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'no')">No</button>
        `;
    } else {
        responseDiv.innerHTML = '<p class="surprise">Oh no! Well, let\'s keep chatting anyway. 😊</p>';
        setTimeout(() => {
            responseDiv.innerHTML = `
                <p class="surprise">🌟 Would you like to be my friend? 🌟</p>
                <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'yes')">Yes</button>
                <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'no')">No</button>
            `;
            responseDiv.classList.add('animate'); // Add animation
        }, 2000);
    }
    responseDiv.classList.add('animate'); // Add animation
}

function askLikeSurprises(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    if (answer === 'yes') {
        responseDiv.innerHTML = `
            <p class="surprise">✨ Do you like surprises? ✨</p>
            <button class="button" onclick="askLikeToTalk('${name}', '${birthdayMonth}', 'yes')">Yes</button>
            <button class="button" onclick="askLikeToTalk('${name}', '${birthdayMonth}', 'no')">No</button>
        `;
    } else {
        responseDiv.innerHTML = '<p class="surprise">Oh, maybe next time! Nice to meet you anyway! 😊</p>';
    }
    responseDiv.classList.add('animate'); // Add animation
}

function askLikeToTalk(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    if (answer === 'yes' || answer === 'no') {
        responseDiv.innerHTML = `
            <p class="surprise">✨ Would you like to talk to me? ✨</p>
            <button class="button" onclick="finalResponse('${name}', '${birthdayMonth}', 'yes')">Yes</button>
            <button class="button" onclick="finalResponse('${name}', '${birthdayMonth}', 'no')">No</button>
        `;
        responseDiv.classList.add('animate'); // Add animation
    }
}

function finalResponse(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    const messageForm = document.getElementById('messageForm');
    responseDiv.className = ''; // Reset class

    if (answer === 'yes') {
        if ((name.toLowerCase() === 'the singh'|| name.toLowerCase() === 'the'|| name.toLowerCase() === 'the'|| name.toLowerCase() === 'the') && birthdayMonth === 'july') {
            const surprises = [
                '🎁 Here’s a virtual gift for being awesome tthe Singh...! 🎁',
                '🚀 Keep shining, rge Singh...! You’re out of this world! 🌌',
                '✨ Magic happens when you’re around! ✨'
            ];
            const surpriseMessage = surprises[Math.floor(Math.random() * surprises.length)];
            responseDiv.innerHTML = `<p class="surprise">✨ Hello! the Singh...! <span class="emoji">👋</span></p><p>${surpriseMessage}</p>`;
            messageForm.className = ''; // Show message form
        } else {
            responseDiv.innerHTML = '<p class="surprise">🎉 Yay! We are friends now! <span class="emoji">🥳</span></p>';
        }
    } else {
        responseDiv.innerHTML = '<p class="surprise">Oh, maybe next time! Nice to meet you anyway! 😊</p>';
    }
    responseDiv.classList.add('animate'); // Add animation
}

function sendMessage() {
    const message = document.getElementById('messageInput').value.trim();
    if (message) {
        const whatsappLink = `https://wa.me/919523740720?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
        alert('Message sent!');
    } else {
        alert('Please enter a message.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setTimeout(hideWelcome, 3000);

    // Notify when someone visits the page
    notifyVisit();

    const form = document.getElementById('telegramForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        askDoYouKnowMe();
    });
});

function notifyVisit() {
    const botToken = '7286669779:AAFwAKGsKQ-HHqYKPumcRkwDtiYzhqWmCAg';
    const chatId = 5038658970; // Updated with your chat ID

    const message = 'Someone visited your webpage.';
    sendTelegramNotification(botToken, chatId, message);
}

function askDoYouKnowMe() {
    const name = document.getElementById('nameInput').value.trim();
    const birthdayMonth = document.getElementById('birthdayInput').value.toLowerCase();
    const responseDiv = document.getElementById('response');
    const messageForm = document.getElementById('messageForm');
    responseDiv.className = ''; // Reset class
    messageForm.className = 'hidden'; // Hide message form initially

    if (name === '' || birthdayMonth === '') {
        responseDiv.innerHTML = '<p class="surprise">👋 Hello, please enter your name and birthday month! 📝</p>';
        responseDiv.classList.add('animate');
        return;
    }

    // Notify when someone submits their name and birthday
    const message = `Name: ${name}, Birthday Month: ${birthdayMonth}`;
    notifyInteraction('name_and_birthday', message);

    responseDiv.innerHTML = `
        <p class="surprise">✨ Hello, ${name}...! Do you know me? ✨</p>
        <button class="button" onclick="askFriendship('${name}', '${birthdayMonth}', 'yes')">Yes</button>
        <button class="button" onclick="askFriendship('${name}', '${birthdayMonth}', 'no')">No</button>
    `;
    responseDiv.classList.add('animate'); // Add animation
    console.log('askDoYouKnowMe called with name and birthday:', name, birthdayMonth); // Log statement
}

function askFriendship(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    // Notify the response to the question "Do you know me?"
    const message = `Name: ${name}, Birthday Month: ${birthdayMonth}, Response: ${answer}`;
    notifyInteraction('do_you_know_me_response', message);

    if (answer === 'yes') {
        responseDiv.innerHTML = `
            <p class="surprise">🌟 Would you like to be my friend? 🌟</p>
            <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'yes')">Yes</button>
            <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'no')">No</button>
        `;
    } else {
        responseDiv.innerHTML = '<p class="surprise">Oh no! Well, let\'s keep chatting anyway. 😊</p>';
        setTimeout(() => {
            responseDiv.innerHTML = `
                <p class="surprise">🌟 Would you like to be my friend? 🌟</p>
                <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'yes')">Yes</button>
                <button class="button" onclick="askLikeSurprises('${name}', '${birthdayMonth}', 'no')">No</button>
            `;
            responseDiv.classList.add('animate'); // Add animation
        }, 2000);
    }
    responseDiv.classList.add('animate'); // Add animation
    console.log('askFriendship called with response:', answer); // Log statement
}

function notifyInteraction(event, message) {
    const botToken = '7286669779:AAFwAKGsKQ-HHqYKPumcRkwDtiYzhqWmCAg';
    const chatId = 5038658970; // Updated with your chat ID

    const finalMessage = `${event}: ${message}`;
    sendTelegramNotification(botToken, chatId, finalMessage);
    console.log(`notifyInteraction called with event: ${event}, message: ${message}`); // Log statement
}

function sendTelegramNotification(botToken, chatId, message) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Notification sent:', data);
    })
    .catch(error => {
        console.error('Error sending notification:', error);
    });
}

