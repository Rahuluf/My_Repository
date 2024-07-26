document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const emojiContainer = document.getElementById("emoji-container");

    noButton.addEventListener("mouseover", function(event) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonRect = noButton.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const distanceX = buttonCenterX - event.clientX;
        const distanceY = buttonCenterY - event.clientY;

        let newLeft = buttonRect.left + distanceX * 2;
        let newTop = buttonRect.top + distanceY * 2;

        newLeft = Math.max(0, Math.min(newLeft, viewportWidth - buttonRect.width - 500));
        newTop = Math.max(0, Math.min(newTop, viewportHeight - buttonRect.height - 500));

        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
        noButton.style.transition = 'all 0.1s ease'; 
    });

    yesButton.addEventListener("click", function() {
        yesButton.classList.add('clicked');

        for (let i = 0; i < 50; i++) {
            const emoji = document.createElement("div");
            emoji.textContent = "❤️";
            emoji.className = "emoji";
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.animationDelay = `${Math.random() * 2}s`;
            emojiContainer.appendChild(emoji);

            emoji.addEventListener('animationend', () => {
                emojiContainer.removeChild(emoji);
            });
        }
    });
});
