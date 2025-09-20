/*
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

// type A = Exclude<string | boolean, boolean>; -> string,boolean 유니온에서 boolean을 제거하여 string

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종 결과
// string | never => never는 공집합이라 사라지니까 string

type A = Exclude<string | boolean, boolean>;

/*
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

// Extract 타입 직접 구현
type Extract<T, U> = T extends U ? T : never;
// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// never |
// boolean

// 최종결과 - booelan

type B = Extract<string | boolean, boolean>; // boolean

/*
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 유틸리티 타입
 */

// Return타입 직접 구현
// funcA를 예시로 들면 extends 좌항 T는 () => string, infer R에서 R은 string타입이 됨
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // funcA 타입에 반환값 타입인 string타입을 추출해서 ReturnA에 들어감 -> string 타입
type ReturnB = ReturnType<typeof funcB>; // number
