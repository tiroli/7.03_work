'use strict'
/*

정수1: 10
정수2: 1

정수1: 10
정수2: 1

정수1: 1
정수2: 100

1부터 10까지의 합 : 5050

*/

let tot=0,
    n1, n2;

    
do {
    n1 = +prompt('정수1');
    n2 = +prompt('정수2');
} while (n1 >= n2)

for (let i= n1; i <= n2; i++) {
    tot = tot + i
}


alert(`${n1}부터 ${n2}까지의 누적합: ${tot}`);