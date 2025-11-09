function randomizeOrganizers() {
    const organizersContainer = document.querySelector('.opt');
    if (organizersContainer) {
        const organizers = Array.from(organizersContainer.children);

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
    }
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', randomizeOrganizers);

// Run when navigating via Hydejack's push-state
document.addEventListener('hy-push-state-load', randomizeOrganizers);
