//Для целочисленного массива arr и функции fn возвращается отфильтрованный массив filteredArr.
//
// Функция fn принимает один или два аргумента:
//
//     arr[i] - номер из arr
//     i i - индекс arr[i]
//
// filteredArr должен содержать только те элементы из arr, для которых выражение fn(arr[i], i) вычисляет истинное значение. Истинное значение — это значение, в котором Boolean(value) возвращает true.
//
// Пожалуйста, решайте ее без встроенного метода Array.filter

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

//
// let arr = [0,10,20,30]
// let fn = function greaterThan10(n) {
//     return n > 10;
// }
// const newArray = filter(arr, fn); // [20, 30]
// console.log(newArray)