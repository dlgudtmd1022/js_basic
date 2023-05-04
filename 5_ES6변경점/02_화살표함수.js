const multi = (n1, n2) => n1 * n2;

console.log(multi(10,3));

const sayHello = () => console.log(`안녕하세요`);

sayHello();

const kim = {
    name : '김자스',
    age : 25,
    greeting : sayHello, // 상단에 이미 선언된 sayHello 입력
    study : () => console.log('빡 공 하 자')
}

kim.study();

const pow = (n) => n**2;

console.log(pow(3)); 