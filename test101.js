var countryImageMap = {
    'NZ': 'img/128x64/New Zealand.png',
    'ENG': 'img/128x64/England.png',
    'SA': 'img/128x64/South Africa.png',
    'SL': 'img/128x64/Sri Lanka.png',
    'AUS': 'img/128x64/Australia.png',
    'PAK': 'img/128x64/Pakistan.png',
    'IND': 'img/128x64/India.png',
    'BAN': 'img/128x64/Bangladesh.png',
    'AFG': 'img/128x64/Afghanistan.png',
    'WI': 'img/128x64/West Indies.png',
    'ZIM': 'img/128x64/Zimbabwe.png',
    'NED': 'img/128x64/Netherlands.png',
};
  
  async function fetchAndPopulateTableData(url, tableBodyId) {
    try {
        const response = await fetch(url);
        const htmlContent = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");

        const rows = doc.querySelectorAll(".rankings");

        const tableBody = document.getElementById(tableBodyId);
        tableBody.innerHTML = ""; // Clear previous data

        for (let i = 0; i < Math.min(rows.length, 5); i++) {
            const name = rows[i].querySelector(".menuteam-feed").textContent;
            const country = rows[i].querySelector(".tdpadr span.menuteamblack").textContent;
            const points = rows[i].querySelectorAll(".tdpadr span.menuteamblack")[1].textContent;

            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.innerHTML = name;
            const countryCell = document.createElement("td");

            var imgSrc = countryImageMap[country] || '';

            countryCell.innerHTML = '<div class="player-rank-image-text">'
                + '<img src="' + imgSrc + '" alt="" height="16" width="auto" class="px-2">'
                + country
                + '</div>';

            const pointsCell = document.createElement("td");
            pointsCell.innerHTML = points;
            const rankCell = document.createElement("td");
            rankCell.innerHTML = '<strong>' + (i + 1) + '.</strong>';

            row.appendChild(rankCell);
            row.appendChild(nameCell);
            row.appendChild(countryCell);
            row.appendChild(pointsCell);
            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchAndPopulateTableData("https://feed.cricket-rankings.com/feed/test/batting/", "tableBody1");
    fetchAndPopulateTableData("https://feed.cricket-rankings.com/feed/odi/batting/", "tableBody2");
});

