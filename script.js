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
        triggerCelebration();  // Trigger celebration here

        if ((name.toLowerCase() === 'alex frost'|| name.toLowerCase() === 'alex'|| name.toLowerCase() === 'alexafrosth'|| name.toLowerCase() === 'alexfrost') && birthdayMonth === 'july') {
            const surprises = [
                '🎁 Here’s a virtual gift for being awesome alex frost...! 🎁',
               
            ];
            const surpriseMessage = surprises[Math.floor(Math.random() * surprises.length)];
            responseDiv.innerHTML = `<p class="surprise">✨ Hello,alex frost...!👋 I hope this message brings a smile to your face. 😊 I've been wanting to reach out and get to know you a bit better, as you seem like someone with an amazing vibe. I'd love to start a conversation, but I also want to make sure you're comfortable with that. If you're up for a chat, I'd be delighted to hear from you!Feel free to connect with me by sending a message below.💬<span class="emoji"></span></p><p>${surpriseMessage}</p>`;
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

    // Add event listener for the form
    const form = document.getElementById('telegramForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            askDoYouKnowMe();
        });
    } else {
        console.error('Element with ID "telegramForm" not found.');
    }
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

function askLikeSurprises(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    // Notify the response to the question "Would you like to be my friend?"
    const message = `Name: ${name}, Birthday Month: ${birthdayMonth}, Response: ${answer}`;
    notifyInteraction('ask_friendship_response', message);

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
    console.log('askLikeSurprises called with response:', answer); // Log statement
}

function askLikeToTalk(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    responseDiv.className = ''; // Reset class

    // Notify the response to the question "Do you like surprises?"
    const message = `Name: ${name}, Birthday Month: ${birthdayMonth}, Response: ${answer}`;
    notifyInteraction('ask_like_surprises_response', message);

    if (answer === 'yes' || answer === 'no') {
        responseDiv.innerHTML = `
            <p class="surprise">✨ Would you like to talk to me? ✨</p>
            <button class="button" onclick="finalResponse('${name}', '${birthdayMonth}', 'yes')">Yes</button>
            <button class="button" onclick="finalResponse('${name}', '${birthdayMonth}', 'no')">No</button>
        `;
        responseDiv.classList.add('animate'); // Add animation
    }
    console.log('askLikeToTalk called with response:', answer); // Log statement
}

function finalResponse(name, birthdayMonth, answer) {
    const responseDiv = document.getElementById('response');
    const messageForm = document.getElementById('messageForm');
    responseDiv.className = ''; // Reset class

    // Notify the response to the question "Would you like to talk to me?"
    const message = `Name: ${name}, Birthday Month: ${birthdayMonth}, Response: ${answer}`;
    notifyInteraction('ask_like_to_talk_response', message);

    if (answer === 'yes') {
        triggerCelebration();  // Trigger celebration here

        if ((name.toLowerCase() === 'alex frost' || name.toLowerCase() === 'alex'|| name.toLowerCase() === 'alexafrosth'|| name.toLowerCase() === 'alexfrost') && birthdayMonth === 'july') {
            const surprises = [
                '🎁 Here’s a virtual gift for being awesome alex frost...! 🎁',
                
            ];
            const surpriseMessage = surprises[Math.floor(Math.random() * surprises.length)];
            responseDiv.innerHTML = `<p class="surprise">✨ Hello,alex frost...!👋 I hope this message brings a smile to your face. 😊 I've been wanting to reach out and get to know you a bit better, as you seem like someone with an amazing vibe. I'd love to start a conversation, but I also want to make sure you're comfortable with that. If you're up for a chat, I'd be delighted to hear from you!Feel free to connect with me by sending a message below.💬<span class="emoji">👋</span></p><p>${surpriseMessage}</p>`;
            messageForm.className = ''; // Show message form
        } else {
            responseDiv.innerHTML = '<p class="surprise">🎉 Yay! We are friends now! <span class="emoji">🥳</span></p>';
        }
    } else {
        responseDiv.innerHTML = '<p class="surprise">Oh, maybe next time! Nice to meet you anyway! 😊</p>';
    }
    responseDiv.classList.add('animate'); // Add animation
    console.log('finalResponse called with response:', answer); // Log statement
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

function triggerCelebration() {
    const body = document.querySelector('body');
    body.classList.add('celebration');
    createMovingEmojis();  // Call the function to create moving emojis

    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
    body.appendChild(confettiContainer);
}
function createMovingEmojis() {
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);

    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDelay = `${Math.random() * 5}s`;
        emojiContainer.appendChild(emoji);
    }
}
function createMovingEmojis() {
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);

    const emojis = ['🎉', '✨', '🥳', '🎊','🥰', '🐼', '🤩', '🎈'];
    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-background'; // Use new class name for background emojis
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDelay = `${Math.random() * 5}s`;
        emojiContainer.appendChild(emoji);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setTimeout(hideWelcome, 3000);
    hideProgressBar(); // Hide progress bar after content is loaded
});

function hideProgressBar() {
    const progressBarContainer = document.getElementById('progress-bar-container');
    setTimeout(() => {
        progressBarContainer.style.display = 'none';
    }, 3000); // Match the duration with the CSS animation
}

let messageShowing = false; // Initialize messageShowing

function startSurpriseMessages() {
    const messages = [
        '🎉 You are doing great!',
        '🌟 Keep shining!',
        '✨ Magic happens when you least expect it!',
        '😊 Don’t forget to smile!',
        '🚀 Reach for the stars!'
    ];

    let lastMessageIndex = -1;

    // Show a message at random intervals
    setInterval(() => {
        if (messageShowing) return;

        let messageIndex;
        do {
            messageIndex = Math.floor(Math.random() * messages.length);
        } while (messageIndex === lastMessageIndex);

        lastMessageIndex = messageIndex;
        showSurpriseMessage(messages[messageIndex]);
    }, Math.random() * 5000 + 5000); // Show message every 5 to 10 seconds
}

function showSurpriseMessage(message) {
    let popup = document.querySelector('.surprise-popup');

    if (!popup) {
        popup = document.createElement('div');
        popup.className = 'surprise-popup';
        document.body.appendChild(popup);
    }

    popup.innerText = message;
    popup.classList.add('show');
    messageShowing = true;

    setTimeout(() => {
        popup.classList.remove('show');
        messageShowing = false;
    }, 4000); // Hide the message after 4 seconds
}

// Start the surprise messages
startSurpriseMessages();


document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBar = document.getElementById('volume-bar');

    playPauseBtn.classList.add('play'); // Initialize with play icon

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('play');
            playPauseBtn.classList.add('pause');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('pause');
            playPauseBtn.classList.add('play');
        }
    });

    volumeBar.addEventListener('input', (event) => {
        audio.volume = event.target.value;
    });
});

