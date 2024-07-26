document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('surprise').classList.remove('hidden');
    showConfetti();
});

function showConfetti() {
    const emojis = ['🎉', '🎊', '🥳', '🎂', '🎁', '💍', '❤️', '🥳'];
    const numEmojis = 1000; // Adjust the number of emojis as needed

    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random positions
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * -100 + 'vh';
        
        // Random animation duration and delay
        emoji.style.animationDuration = (Math.random() * 2 + 3) + 's';
        emoji.style.animationDelay = Math.random() + 's';
        
        document.body.appendChild(emoji);
        
        // Remove the emoji after animation ends to avoid clutter
        emoji.addEventListener('animationend', () => {
            document.body.removeChild(emoji);
        });
    }
}
 