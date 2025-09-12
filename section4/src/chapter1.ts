/*
 * 함수 타입 표현식 -> 매개변수의 개수와 타입을 다 맞춰줘야 함
 */

type Operation = (a: number, b: number) => number; // (a: number, b: number) -> 매개변수 타입 정의, number -> 반환값의 타입 정의

// 중복되는 타입 정의가 많아질 때 함수 표현식을 이용하면 깔끔하게 적용할 수 있음
// const add: (a: number, b: number) => number = (a,b) => a + b;  => 이런 식으로 정의할 수도 있음
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/*
 * 호출 시그니처 (콜 시그니처) -> 함수 타입 표현식과 동일한 기능
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 호출 시그니처를 이용할 때는 프로퍼티를 추가로 정의해줄 수 있음
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
