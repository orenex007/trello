function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false;
    }
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
            return false;
        }
    }
    return true;
}

let obj = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj, { a: 1, b: { c: 2 } }));
console.log(deepEqual(obj, { a: 1, b: { c: 3 } }));
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, null));
console.log(deepEqual(null, null));
