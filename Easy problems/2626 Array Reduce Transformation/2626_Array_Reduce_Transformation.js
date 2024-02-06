//Дан целочисленный массив nums, функция сокращения fn и начальное значение init, возвращают
// окончательный результат, полученный при последовательном выполнении функции fn для каждого элемента массива,передавая возвращаемое значение из вычисления на предыдущем элементе.fn
//
// Этот результат достигается с помощью следующих операций: val = fn(init, nums[0]), val = fn(val, nums[1]), val val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... тех пор, пока не будет обработан каждый элемент массива. Затем возвращается конечное значение val.
//
// Если длина массива равна 0, то функция должна вернуть init.
//
// Пожалуйста, решайте ее без использования встроенного метода Array.reduce
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let acc = init;
    for (const x of nums) {
        acc = fn(acc, x);
    }
    return acc;
};

// let nums = [1, 2, 3, 4]
// let fn = function sum(accum, curr) {
//     return accum + curr;
// }
// let init = 0
//
// let x = reduce(nums, fn, init);
// console.log(x) //10