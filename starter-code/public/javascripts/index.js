
function GenerateTable() {
    //Build an array containing drone records.
    var dronesList = [];
    dronesList.push(["Drone Id", "Drone Name", "Propellers", "Max Speed (meters per second)"]);
    drones.forEach((oneDrone, index) => {
        dronesList.push(index, oneDrone.droneName, oneDrone.propellers, oneDrone.maxSpeed);
    });
    
    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = dronesList[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = dronesList[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (let i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = dronesList[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

$(document).ready(function(){
    GenerateTable();
});