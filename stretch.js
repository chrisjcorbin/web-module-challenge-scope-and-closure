/* Stretch Task 2: */

function createBase(baseNum){
    return function(num){
        return baseNum + num;
    }
}

var addSix = createBase(6);
console.log (addSix(10)); // returns 16
console.log(addSix(21)); // returns 27