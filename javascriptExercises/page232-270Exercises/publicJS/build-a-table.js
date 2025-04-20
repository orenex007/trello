const mountains = [
    {name: "Kilimanjaro", height: "5895", place: "Tanzania"},
    {name: "Doron", height: "5451", place: "Portugal"},
    {name: "Oren", height: "5234", place: "Israel"}
];
//Create Table without HTML!
const mountainTable = document.createElement("table");
//Create TR and TH without HTML!
let mountainTR = document.createElement("tr");

let mountainTH = document.createElement("th");

let mountainTD = document.createElement("td");

const mountainKeys = Object.keys(mountains[0]);

mountainKeys.forEach(eachKey => {
    mountainTH = document.createElement("th");
    mountainTH.textContent = eachKey;
    mountainTR.appendChild(mountainTH);
});
mountainTable.appendChild(mountainTR);

mountains.forEach(mountain => {
    mountainTR = document.createElement("tr");
    mountainKeys.forEach(eachKey => {
        mountainTD = document.createElement("td");
        mountainTD.textContent = mountain[eachKey];
        mountainTD.style.textAlign = "right";
        mountainTR.appendChild(mountainTD);
    });
    mountainTable.appendChild(mountainTR);
});

document.getElementById("mountains").appendChild(mountainTable);
