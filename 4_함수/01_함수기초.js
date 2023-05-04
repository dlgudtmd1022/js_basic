// 함수 정의하기 (실해와는 별개임)
function makeFood(sause){
    console.log(`면을 삶습니다.`);
    console.log(`${sause}를 넣고 면수와 볶습니다.`);
    console.log(`${sause}스파케티 완성~`);
}

// 함수 호출
makeFood(`미트`);

// 원 넓리를 구하는 함수를 정의해주세요.
// 함수명은 calcCircle, 반지름으로 변수 r을 요구합니다.
// 원주율(3.14) * 반지름의 제곱이 원의 넓이입니다.
// 원의 넓이를 구해 호출위치로 리턴합니다.

function calcCircle(r){
    return 3.14 * (r ** 2);
}

console.log(`원의 넓이는 ${calcCircle(5)} 입니다.`);

