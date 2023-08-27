var urls = {
    odi: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_ODI_Team_Rankings',
    test: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_Test_Team_Rankings',
    t20: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_T20I_Team_Rankings'
};

function generateListItem(rank, team, points, rating) {
    return `
    <li class="list-group-item ranking-list px-0">
        <div class="container">
            <div class="row">
                <div class="col-6 rank-image-text text-center mx-auto pe-0">
                    <span class="team-rank"><strong>${rank}</strong></span>
                    <img src="img/128x64/${team}.png" alt="${team}" height="16" width="auto" class="px-2 mt-1">${team}
                </div>
                <div class="col text-center">${points}</div>
                <div class="col text-center">${rating}</div>
            </div>
        </div>
    </li>
    `;
}

function fetchDataAndGenerateList(url, startRow, endRow, tableContainerId) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(response){
            var html_code = response["parse"]["text"]["*"];
            var parser = new DOMParser();
            var html = parser.parseFromString(html_code, "text/html");
            var tables = html.querySelectorAll(".wikitable");

            if (tables.length > 0) {
                var tableContainer = document.getElementById(tableContainerId);
                var targetRows = tables[0].querySelectorAll("tr");

                for (var i = startRow; i <= endRow; i++) {
                    var cells = targetRows[i].querySelectorAll("th, td");
                    var rank = cells[0].textContent.trim();
                    var team = cells[1].textContent.trim();
                    var points = cells[3].textContent.trim();
                    var rating = cells[4].textContent.trim();

                    var listItemHtml = generateListItem(rank, team, points, rating);

                    if (i === 5) {
                        listItemHtml = listItemHtml.replace('class="list-group-item ranking-list px-0"', 'class="list-group-item ranking-list px-0 border-top-0"');
                    }
                    
                    tableContainer.innerHTML += listItemHtml;
                }
            }
        })
        .catch(function(error) {
            console.error("Error fetching data:", error);
        });
}

fetchDataAndGenerateList(urls.odi, 2, 4, "odirankingListInitial");
fetchDataAndGenerateList(urls.odi, 5, 11, "odirankingListFinal");

fetchDataAndGenerateList(urls.test, 2, 4, "testrankingListInitial");
fetchDataAndGenerateList(urls.test, 5, 11, "testrankingListFinal");

fetchDataAndGenerateList(urls.t20, 2, 4, "t20rankingListInitial");
fetchDataAndGenerateList(urls.t20, 5, 11, "t20rankingListFinal");
