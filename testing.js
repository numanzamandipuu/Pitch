// JavaScript code to load player information
const playersContainer = document.getElementById("playersContainer");

// Simulated data for player information (you can replace this with actual data)
const playersData = [
    // ... (array of player objects)
];

// Function to create player card HTML
function createPlayerCard(player) {
    return `
    <div class="ds-flex ds-p-4 ds-flex-row ds-space-x-4 ds-border-line ds-border-b odd:ds-border-r last:ds-border-none">
        <a href="${player.profileLink}" class="ds-flex">
            <span class="ds-border ds-border-line-default-translucent ds-text-typo ds-bg-ui-fill ds-overflow-hidden ds-flex ds-items-center ds-justify-center ds-w-20 ds-h-20 ds-rounded-full">
                <img width="80" height="80" alt="${player.name}" class="ds-block" src="${player.imageURL}">
            </span>
        </a>
        <div class="ds-flex ds-flex-col">
            <a href="${player.profileLink}" title="${player.name}" class="ds-inline-flex ds-items-start ds-leading-none">
                <span class="ds-text-compact-m ds-font-medium ds-text-typo hover:ds-text-typo-primary ds-block">${player.name}</span>
            </a>
            <span class="ds-text-tight-l">${player.name}</span>
            <span class="ds-text-tight-m ds-font-regular ds-text-typo-mid3">Age: ${player.age}</span>
        </div>
    </div>`;
}

// Load player information and populate the container
function loadPlayers() {
    let playersHTML = '';
    for (const player of playersData) {
        playersHTML += createPlayerCard(player);
    }
    playersContainer.innerHTML = playersHTML;
}

// Call the loadPlayers function when the page is loaded
window.addEventListener("load", loadPlayers);
