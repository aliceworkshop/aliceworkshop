function randomizeSpeakers() {
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
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', randomizeSpeakers);

// Run when navigating via Hydejack's push-state
const pushStateEl = document.querySelector('hy-push-state');
if (pushStateEl) {
    pushStateEl.addEventListener('hy-push-state-after', randomizeSpeakers);
}
