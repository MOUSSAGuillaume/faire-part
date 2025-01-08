document.getElementById('revealButton').addEventListener('click', function() {
    const flap = document.querySelector('.flap');
    const card = document.querySelector('.card');

    // Animation de la carte et du volet
    flap.style.transform = 'rotateX(180deg)';
    card.style.transform = 'translateY(-100%)';

    // Lancer les confettis depuis l’enveloppe
    launchConfetti();
});

function launchConfetti() {
    const container = document.querySelector('.confetti-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.bottom = '0';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000); // Supprime après 2 secondes
    }
}

function getRandomColor() {
    const colors = ['#ff7f50', '#ffd700', '#adff2f', '#00ced1', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}
