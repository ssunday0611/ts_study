// 변수 : 상수값 타입 숫자로 하면 에러남
const message : string= 'hello world';
console.log(message);

// let 과 const를 사용해서 여러가지 기본 타입 지정해서 선언해보기

let count = 0; // 숫자
count +=1;
// count = '갑분문'; 에러남
const message2: string ='hello sorld' //문자열

const done: boolean = true; //불리언 값

const numbers: number[] = [1,2,3]; //숫자 배열
const messages: string[] = ['hello', 'world']; //문자열 배열

// message.push(1); // 문자열 배열이기 때문에 숫자 넣으려고 하면 에러남

let mightBeUndefined: string | undefined = undefined;
// string일수도 있고 undifined일수도

let nummableNumber: number | null = null
// 숫자일수도, null일수도

let color: 'red' | 'orange' | 'yellow' = 'red';
// red orange yellow 중 하나임
color = 'yellow';
// color = 'green' //에러


// 함수에서 타입 정의하기
// :number -> 리턴값이 숫자여야한다.
function sum(x: number, y:number):number{
    return x+y;
}

sum(1,2);

// 숫자 배열의 총합을 구하는 함수 만들기
function sumArray(numbers:number[]): number{
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);

// 함수에서 아무것도 반환하지 않을때는 void쓰면 됨
function returnNothing(): void{
    console.log('nothing');
}