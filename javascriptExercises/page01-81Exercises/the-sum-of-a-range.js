function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

function sum(numbers) {
    return numbers.reduce(function (total, number) {
        return total + number;
    });
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));

console.log(range(1, 10, 3));
console.log(sum(range(1, 10, 3)));

console.log(range(1, 10, 5));
console.log(sum(range(1, 10, 5)));

console.log(range(1, 10, -1));