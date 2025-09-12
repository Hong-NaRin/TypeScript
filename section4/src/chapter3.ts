/*
 * 함수 오버로딩
 * 하나의 함수(동일한 이름의 메서드)를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 => 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 => 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처 (함수의 구현부 없이 선언식만 써놓은 것) => 함수를 오버로딩하기 위해서 각각 매개변수 별로 다른 버전을 명시하기 위해 씀
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  // b와 c를 선택적 프로퍼티로 정의해주지 않으면 function func(a: number)는 의미가 없어지므로 오류가 발생하게 됨
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); -> 오버로드 시그니처를 만들어 놨기 때문에 에러
func(1); // -> 오버로드 시그니처들 중에 하나의 버전을 따라감
// func(1,2);
func(1, 2, 3);
