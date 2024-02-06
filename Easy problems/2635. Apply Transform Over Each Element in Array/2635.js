//Учитывая целочисленный массив arr и функцию отображения fn, верните новый массив с преобразованием, примененным к каждому элементу.

// Возвращаемый массив должен быть создан таким образом, чтобы returnArray[i] = fn(arr[i], i).

// Пожалуйста, решите эту проблему без встроенного метода Array.map.


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};