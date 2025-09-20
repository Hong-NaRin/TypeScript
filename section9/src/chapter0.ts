/*
 * 조건부 타입
 */

// 삼항 연산자를 이용해 number타입이 string타입을 확장하는 타입이면 string, 아니면 number 식으로 조건에 따라 타입을 결정 -> 조건부 타입
type A = number extends string ? string : number; // number

// 슈퍼타입
type ObjA = {
  a: number;
};

// 서브타입
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // ObjB 타입이 ObjA 타입을 확장하고 있으므로 참인 number 타입

/*
 * 제네릭과 조건부 타입
 * -> 타입을 가변적으로 쓰면서, 논리의 흐름에 따라서 타입을 바꿔줄 수 있음
 */

// 타입변수 T에 number타입이 들어오게 되면 참이 되므로 StringNumberSwitch이 string타입이 되고, string이 들어오게 되면 number타입이 할당됨
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

// 오버로드 시그니처 만들기
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  // function removeSpaces<T>(text: T): T extends string ? string : undefined {
  // 인수에 string타입의 값을 넣으면 T가 string이 되므로 참으로 string 반환, 아니면 undefined
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // 공백 문자 모두를 빈 문자열로 바꾸게 설정 (공백 제거)
    // return text.replaceAll(" ", "") as any;
    // 문제 1. 함수 내부에서는 조건부 타입의 결과를 알 수가 없음 -> any 타입으로 단언해줘서 에러 해결해야 함
    // 문제 2. 반환값의 타입을 any로 바꾸면, 무조건 string타입을 반환하기로 약속되어 있는 것을 숫자로 전달해도 any타입이 들어가서 검사가 안되기 때문에 함수 오버로딩을 같이 써줌
    // -> undefined나 string이 아닌 타입을 반환하면 오버로드 시그니처가 문제를 감지하여 타입 정의를 완벽하게 해주고, 에러를 발생시킴
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winter");
result.toUpperCase(); // string

let result2 = removeSpaces(undefined); // undefined
