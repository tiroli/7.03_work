'use strict'
/*

정수1 :1
정수2: 10
1 부터 10까지의 누적합: 55

정수1 : 100
정수2: 1

1 부터 100까지 누적합 : 5050

*/

let tot = 0,
    min, max;

min = +prompt('정수1 : ');
max = +prompt('정수2 : ');

if ( min > max) {
    let t = min;
    min = max,  max = t;
}

for(let i = min; i <= max; i++){
    tot += i;
}

alert(`${min}부터 ${max}까지 누적합: ${tot}`);