// Возвращает наименьший индекс, по которому значение (второй аргумент) должно быть вставлено в массив (первый аргумент) после его сортировки. Возвращаемое значение должно быть числом.

// Например, getIndexToIns([1,2,3,4], 1.5)должен возвращаться , 1потому что он больше 1(индекс 0), но меньше 2(индекс 1).

// Аналогично, getIndexToIns([20,3,5], 19)должно возвращаться , 2потому что после сортировки массива он будет выглядеть меньше (индекс 2) [3,5,20]и больше (индекс 1).19205


function getIndexToIns(arr, num) {
    let arrNew = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }
    return arr.length;
}

function getIndexToIns(arr, num) {
    // sort and find right index
    let index = arr
        .sort((curr, next) => curr - next)
        .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
}

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}