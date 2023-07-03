'use strict'
 

// 1, 1, 2, 3, 5, 8, 13 ~ ...100번째 항까지의 합

최초전전항값 = 전항값 = 1

현재항값 =  전전항값 + 전항값

현재누적합 = 과거누적합 + 현재항값


전전항값 = 전항값
전항값 = 현재항값

passpast = past;
past = now;


//최초전전항값 = 전항값 = 1 이니까 98번 돌려줘야해

let passpast=1, past=1;

for(let i= 2; i < 100; i++) {
    now = passpast + past;
    tot = tot + now;
}