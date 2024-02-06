//Напишите функцию expect, которая поможет разработчикам тестировать свой код. Она должна принимать любое значение val и возвращать объект со следующими двумя функциями.
//
//     Значение toBe(val) принимает другое значение и возвращает true, если два значения === друг другу. Если они не равны, оно должно выдать ошибку "Not Equal".
//
//     notToBe(val) принимает другое значение и возвращает true, если два значения !== друг другу. Если они равны, это должно выдать ошибку "Равно".
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(val2){
        if(val===val2) return true;
        throw new Error('Not Equal');
    }

    function notToBe(val2){
        if(val!==val2) return true;
        throw new Error('Equal');
    }
    return {
        toBe,
        notToBe
    }
};


console.log(expect(5).toBe(5)); // true
expect(5).notToBe(5); // throws "Equal"

