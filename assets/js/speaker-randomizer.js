function randomizeContainers() {
    // Randomize all containers (speakers and organizers)
    ['.spt', '.opt'].forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            const items = Array.from(container.children);

            // Fisher-Yates shuffle algorithm
            for (let i = items.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [items[i], items[j]] = [items[j], items[i]];
            }

            // Clear container and append shuffled items
            container.innerHTML = '';
            items.forEach(item => {
                container.appendChild(item);
            });
        }
    });
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', randomizeContainers);

// Run when navigating via Hydejack's push-state
const pushStateEl = document.querySelector('hy-push-state');
if (pushStateEl) {
    pushStateEl.addEventListener('hy-push-state-after', randomizeContainers);
}
