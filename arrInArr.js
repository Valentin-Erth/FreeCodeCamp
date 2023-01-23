// коренастая обезьяна
// Напишите функцию, которая разбивает массив (первый аргумент) на группы длиной size(второй аргумент) и возвращает их в виде двумерного массива.
function chunkArrayInGroups(arr, size) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i += size) {
        arrNew.push(arr.slice(i, i + size));
    }
    return arrNew;
}