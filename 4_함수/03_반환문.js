function add(n1, n2){
    return n1 + n2; // 반환문

    console.log(`해당 라인에 오기전에 return문을 만나 출력되지 않음`);
}

var r1 = add(5, 7);
console.log(r1);

// 중첩 호출시는 괄호 제일 안쪽부터 하나씩 순서대로 호출됩니다.
console.log(add(r1, add (3, 5)));

// 리턴이 없는 void리턴 함수
function showMutli(n1, n2){
    console.log(`${n1} * ${n2} = ${n1*n2}`)
}
var result = showMutli(2, 4);
// console.log(result);

// return을 탈출문으로 쓰는 예시
function question(answer){
    if(answer !== 5050){
        console.log(`계산 똑바로 안합니까?`);
        return;
    }
    console.log(`정답입니다.`);
}

console.log(`1부터 100까지 더한 결과는?`)
question(5050);
question(5049);