/*
 * 함수 타입 표현식 -> 매개변수의 개수와 타입을 다 맞춰줘야 함
 */
// 중복되는 타입 정의가 많아질 때 함수 표현식을 이용하면 깔끔하게 적용할 수 있음
// const add: (a: number, b: number) => number = (a,b) => a + b;  => 이런 식으로 정의할 수도 있음
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const add2 = (a, b) => a + b;
const sub2 = (a, b) => a - b;
const multiply2 = (a, b) => a * b;
const divide2 = (a, b) => a / b;
export {};
