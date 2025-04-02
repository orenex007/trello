function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("Bean Counting BBB"));
console.log(countChar("Bean Counting BBC", "B"));
console.log(countChar("Bean Counting BBD eee", "e"));