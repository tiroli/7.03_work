'use strict'
/*

1, 3, 5, 7, 9 ~20번째 항까지의 합

*/


// 현재 누적값 =  과거 누적합 + 현재항값
// 현재항값 = 과거항값+2

let num=-1, tot=0;


for(let n=1; n <= 20; n++) {
    num = num+2;
    tot = tot + num;
}


'use strict';

// 1, 3, 5, 7, 9 ~ 20번째 항까지의 합.

// let tot = 0,
//     n = -1;

// for (let i = 0; i < 20; i++) {
//     n += 2;
//     tot += n;
// }
//
// console.log(tot);

// let tot = 0,
//     n = 1;

// for (let i = 0; i < 20; i++) {
//     tot += n;
//     n += 2;
// }

// console.log(tot);


let tot = 1,
    n = 1;

for (let i = 1; i < 20; i++) {
    n += 2;
    tot += n;
}

console.log(tot);
