// Нам нужно вернуть элемент из массива, который передает функцию. И the, functionи the arrayпередаются в нашу функцию findElement(arr, func).
function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

function findElement(arr, func) {
    return arr.find(func);
}

function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;