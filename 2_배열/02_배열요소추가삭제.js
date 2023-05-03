var pets = ['멍멍이', '야옹이', '또자'];

console.log(`pet ${pets}`);

// pets[3] = '까미';
pets.push('까미');
pets.push('대박이');
console.log(`pets : ${pets}`);

var newLength = pets.push('콩콩이', '징징이');
console.log(`pets : ${pets}, 2개 넣으면? : ${newLength}`);

// 마지막 데이터 삭제
var deletedData = pets.pop();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`)

// 첫번째 데이터 삭제
var deletedData = pets.shift();
console.log(`pets : ${pets}, 삭제된 데이터 : ${deletedData}`)

// unshift로 배열 첫 번째에 데이터 추가하기
newLength = pets.unshift('똥개', '금개');
console.log(`pets : ${pets}, 추가 후 길이 : ${newLength}`);