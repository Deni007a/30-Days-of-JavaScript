//Напишите функцию createCounter . Она должна принимать начальную целочисленную инициализацию. Она должна возвращать объект с тремя функциями.
// Эти три функции:
//     функция increment() увеличивает текущее значение на 1 и затем возвращает его.
//     функция decrement() уменьшает текущее значение на 1 и затем возвращает его.
//     функция reset() устанавливает текущее значение в init и затем возвращает его.

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const original = init;
    const increment = () => ++init;
    const decrement = () => --init;
    const reset = () => init = original;
    return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */