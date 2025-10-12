document.addEventListener('DOMContentLoaded', function() {
    const speakersContainer = document.querySelector('.spt');
    if (speakersContainer) {
        const speakers = Array.from(speakersContainer.children);
        
        // Fisher-Yates shuffle algorithm
        for (let i = speakers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [speakers[i], speakers[j]] = [speakers[j], speakers[i]];
        }
        
        // Clear container and append shuffled speakers
        speakersContainer.innerHTML = '';
        speakers.forEach(speaker => {
            speakersContainer.appendChild(speaker);
        });
    }
});
