let size = 8;
for (let i = 0; i < 10; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            row += " ";
        }
        else {
            row += "#";
        }
    }
    console.log(row);
}


