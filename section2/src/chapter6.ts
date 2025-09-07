// any : 모든, 누구나
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "hello"; // any 없이 사용했다면 초기값이 숫자값이라 문자가 올 수 없음

anyVar = true;
anyVar = {};
anyVar = () => {};

// 메서드도 제약없이 자유롭게 사용 가능
anyVar.toUpperCase(); // 오류는 없지만 tsx로 실행 시키면 {} 함수에 값이 없으므로 런타임 에러 발생
anyVar.toFixed();

let num: number = 10;
num = anyVar; // 넘버타입 변수에 anyVar를 넣어도 타입 오류가 발생하지 않음

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 어느 타입이 들어올지 모르겠을 때, any나 unknown을 쓸 수 있음
// 차이점 : unknown 타입은 모든 값을 저장할 수는 있지만 반대로는 안됨
// num = unknownVar;
// unknownVar.toUpperCase();
// 값을 활용하고 싶다면 조건문 활용
if (typeof unknownVar === "number") {
  num = unknownVar;
}
