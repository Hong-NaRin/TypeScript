// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "narin"];
let boolArr: Array<boolean> = [true, false, true]; // <> -> 제네릭 시용도 가능

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> js에는 없고 ts에만 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; -> 길이를 넘어서는 배열 저장 X
// tup1 = ["1", "2"]; -> 타입을 만족하지 않는 배열도 저장 X

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2", 1, true] -> 불가능

const users: [string, number][] = [
  ["카리나", 1],
  ["윈터", 2],
  ["닝닝", 3],
  ["지젤", 1],
  // [5, "에스파"], // 설정한 것과 순서가 다르게 넣었을 때 튜플타입을 이용해서 오류를 감지하기 때문에 값을 잘못 넣는 것을 방지
];
