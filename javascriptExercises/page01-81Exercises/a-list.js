function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let i = list; i !== null; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(value, list) {
    return { value: value, rest: list };
}

function nth(list, index) {
    let count = 0;
    for (let current = list; current !== null; current = current.rest) {
        if (count === index) return current.value;
        count++;
    }
    return undefined;
}

function nthRecursive(list, index) {
    if (list === null) return undefined;
    if (index === 0) return list.value;
    return nthRecursive(list.rest, index - 1);
}

let list = arrayToList([1, 2, 3]);
console.log(listToArray(list));
console.log(prepend(0, list));
console.log(nth(list, 1));
console.log(nthRecursive(list, 2));
