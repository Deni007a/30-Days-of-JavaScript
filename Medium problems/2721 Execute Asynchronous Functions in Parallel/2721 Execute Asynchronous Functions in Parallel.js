/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
//Учитывая массив асинхронных функций, возвращает новое обещание promise. Каждая функция в массиве не принимает аргументов и возвращает обещание. Все обещания должны выполняться параллельно.
//
//
//
// обещание разрешает:
//
//
//
//     Когда все обещания, возвращенные функциями, были успешно разрешены параллельно. Разрешенное значение promise должно быть массивом всех разрешенных значений promises в том же порядке, в каком они были в функциях. Обещание должно быть выполнено, когда все асинхронные функции в массиве завершат параллельное выполнение.
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolved_count = 0;


        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(result => {
                    results[i] = result;
                    resolved_count++;
                    if (resolved_count === functions.length) { resolve(results);}
                })
                .catch(err => {reject(err);});
        }
    });
};


const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
