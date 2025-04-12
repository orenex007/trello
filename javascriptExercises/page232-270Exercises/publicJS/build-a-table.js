const mountains =[
    {name: "Kilimanjaro", height: "5895", place: "Tanzania"},
    {name: "Doron", height: "5451", place: "Portugal"},
    {name: "Oren", height: "5234", place: "Israel"}
];
//Create Table without HTML!
let table = document.createElement("table");
//Create TR and TH without HTML!
let tr = document.createElement("tr");
let keys = Object.keys(mountains[0]);
keys.forEach(key =>{
    let th = document.createElement("th");
    th.textContent = key;
    tr.appendChild(th);
});
table.appendChild(tr);

mountains.forEach(mountain =>{
    let row = document.createElement("tr");
    keys.forEach(key =>{
        let td = document.createElement("td");
        td.textContent = mountain[key];
        row.appendChild(td);
    });
    table.appendChild(row);
});

document.getElementById("mountains").appendChild(table);