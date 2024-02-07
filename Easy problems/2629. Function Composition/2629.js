//Учитывая массив функций [f1, f2, f3, ..., fn], верните новую функцию fn, которая является функциональной композицией массива функций. Функциональная композиция [f(x), g(x), h(x)] равна fn(x) = f(g(h(x))). Функциональной композицией пустого списка функций является тождественная функция f(x) = x. Вы можете предположить, что каждая функция в массиве принимает одно целое число в качестве входных данных и возвращает одно целое число в качестве выходных данных.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

        return function (x) {
            return functions.reduceRight((acc, fn) => fn(acc), x);
        };

};

//
// let x = compose([x => 10 * x, x => 10 * x, x => 10 * x])
// console.log(x(1)) //1000