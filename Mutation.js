// Возврат true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

// Например ["hello", "Hello"], должно возвращаться значение , trueпоскольку все буквы во второй строке присутствуют в первой без учета регистра.

// Аргументы ["hello", "hey"]должны возвращаться false, потому что строка helloне содержит расширение y.

// Наконец, ["Alien", "line"]должен вернуться , trueпотому что все буквы lineприсутствуют в Alien.
function mutation(arr) {
    let arrNew = arr.map(el => el.toUpperCase());
    for (let char of arrNew[1]) {
        if (arrNew[0].indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}