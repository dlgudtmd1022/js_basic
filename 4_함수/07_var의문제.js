// console.log(`x : ${x}`);

// 2. 블록레벨 스코프 지원  x
// var i = '안녕';
let i = '안녕';

// for(var i = 0; i < 3; i++){
for(let i = 0; i < 3; i++){
    console.log(`for문 도는도중 i : ${i}`);
}
console.log(`for문 끝나고 i : ${i}`);


// 3. 변수 호이스팅 : 선언문만 맨 위에 있는것으로 취급하는것
// z = 100;

// console.log(z);

// let z;
