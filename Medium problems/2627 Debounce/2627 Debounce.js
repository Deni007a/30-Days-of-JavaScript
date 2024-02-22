//Учитывая функцию fn и время в миллисекундах t, верните исправленную версию этой функции.
// Отмененная функция - это функция, выполнение которой задерживается на t миллисекунд и выполнение которой отменяется, если она вызывается снова в течение этого промежутка времени. Отмененная функция также должна получить переданные параметры.

// Например, допустим, t = 50 мс, и функция вызывалась через 30 мс, 60 мс и 100 мс. Первые 2 вызова функции будут отменены, а 3-й вызов функции будет выполнен со скоростью 150 мс. Если бы вместо этого t = 35 мс, 1-й вызов был бы отменен, 2-й был бы выполнен через 95 мс, а 3-й был бы выполнен через 135 мс.

// Схема отмены

// На приведенной выше диаграмме показано, как debounce преобразует события. Каждый прямоугольник соответствует 100 мс, а время отмены - 400 мс. Каждый цвет представляет другой набор входных данных.

// Пожалуйста, решите это без использования функции _.debounce() Lodash.


/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, t)
    }
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

