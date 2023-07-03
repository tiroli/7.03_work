'use strict'
/*

정수 : 1
정수 : 2
정수 : 3
정수 : 4
정수 : 5
정수 : 0  -> 끝남

누적합 : 15

*/


let tot = 0,
    num;

for (; ;) {
    num = +prompt('정수 : ');
    if (num === 0) break;
    tot += num;
}

alert(` 누적합: ${tot}`);
