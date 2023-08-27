function extractTableData(table, startRow, endRow) {
    var targetRows = table.querySelectorAll("tr");
    var tableHtml = "<table>";
    
    for (var i = startRow; i <= endRow; i++) {
        var rowData = [];
        targetRows[i].querySelectorAll("th, td").forEach(function(cell, index) {
            if (index !== 2) { // Skip 3rd column
                rowData.push(cell.textContent.trim());
            }
        });
        tableHtml += "<tr><td>" + rowData.join("</td><td>") + "</td></tr>";
    }
    
    tableHtml += "</table>";
    return tableHtml;
}

var odiurl = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_ODI_Team_Rankings';
var testurl = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_Test_Team_Rankings';
var t20url = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=ICC_Men%27s_T20I_Team_Rankings';

function fetchingData(url, table01, table02) {
        
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
            var table01Container = document.getElementById(table01);
            var table02Container = document.getElementById(table02);
            var table01Html = extractTableData(tables[0], 2, 4); // Rows 3 to 5
            var table02Html = extractTableData(tables[0], 5, 11); // Rows 6 to 12

            table01Container.innerHTML = table01Html;
            table02Container.innerHTML = table02Html;
        }
        })
        .catch(function(error) {
        console.error("Error fetching data:", error);
        });

}


fetchingData(odiurl, "table01", "table02");
fetchingData(testurl, "table03", "table04");
fetchingData(t20url, "table05", "table06");