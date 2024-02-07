//Учитывая два обещания promise1 и promise2, верните новое обещание. promise1 и promise2 оба разрешатся числом. Возвращенное обещание должно разрешиться суммой двух чисел.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let temp = await promise1 + await promise2;
    return temp;

    //Another solution
  // const [value1, value2] = await Promise.all([promise1, promise2]);
  // return value1 + value2;
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
