// Повторить заданную строку str(первый аргумент) несколько numраз (второй аргумент). Возвращает пустую строку, если numне является положительным числом. Для целей этой задачи не используйте встроенный .repeat()метод.
function repeatStringNumTimes(str, num) {
    let res = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            res += str;
        }
        return res;
    } else return "";
}