function randomizeOrganizers() {
    console.log('randomizeOrganizers called');
    const organizersContainer = document.querySelector('.opt');
    console.log('organizersContainer:', organizersContainer);
    if (organizersContainer) {
        const organizers = Array.from(organizersContainer.children);
        console.log('Number of organizers:', organizers.length);

        // Fisher-Yates shuffle algorithm
        for (let i = organizers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [organizers[i], organizers[j]] = [organizers[j], organizers[i]];
        }

        // Clear container and append shuffled organizers
        organizersContainer.innerHTML = '';
        organizers.forEach(organizer => {
            organizersContainer.appendChild(organizer);
        });
        console.log('Organizers randomized');
    }
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired for organizers');
    randomizeOrganizers();
});

// Run when navigating via Hydejack's push-state
const pushStateEl = document.querySelector('hy-push-state');
console.log('pushStateEl found:', !!pushStateEl);
if (pushStateEl) {
    pushStateEl.addEventListener('hy-push-state-after', function() {
        console.log('hy-push-state-after fired for organizers');
        randomizeOrganizers();
    });
}
