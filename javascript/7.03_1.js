'use strict'
/*

작은수:1
큰 수: 10
1 부터 10까지의 누적합: 55

*/

let tot = 0,
    min, max;

min = +prompt('작은수 : ');
max = +prompt('큰 수 : ');

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min}부터 ${max}까지 누적합: ${tot}`);