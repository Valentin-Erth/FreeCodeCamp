// Проверьте, strзаканчивается ли строка (первый аргумент, ) заданной целевой строкой (второй аргумент, target).

// Эту задачу можно решить с помощью .endsWith()метода, представленного в ES2015. Но для целей этой задачи мы хотели бы, чтобы вы вместо этого использовали один из методов подстроки JavaScript.
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");