/*
 * 분산적인 조건부 타입
 * -> 조건부 타입을 유니온과 함께 사용할 때, 조건부 타입이 분산적으로 동작하게 업그레이드 시킨 기능
 */

// 분산적인 조건부 타입이 되지 않게 막고 싶다면, extends의 양 옆에 대괄호를 씌우면 분산이 되지 않음
// -> type StringNumberSwitch<T> = [T] extends [number] ? string : number;
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<string>; // number

let c: StringNumberSwitch<number | string>;
// 원래대로라면 T가 number,string 유니온 타입(number와 string의 합집합)이 되면, number타입의 슈퍼타입이기 때문에 거짓으로 number가 나와야 하지만
// -> 조건부 타입에 타입 변수로 유니온 타입을 할당하면 일반적인 조건부 타입이 아닌, 분산적인 조건부 타입으로 업그레이드 되기 때문에 string | number로 반환됨
// 타입 변수에 유니온을 할당하게 되면 그대로 타입 변수에 들어오는 게 아니라 한 번은 number, 한 번은 string으로 분리되어 들어가게 됨
// -> StringNumberSwitch<number> - string | StringNumberSwitch<string> - number 식으로 묶이게 됨

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string | number인데 중복 제외하고 number | string

/*
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T; // 타입 변수 T가 타입 변수 U의 서브타입이라면 never, 아니면 T
// ex - T가 number이고 U가 string이면 number 반환, U가 number면 never반환

// string 타입만 제거한 number | boolean 유니온 타입을 얻을 수 있게 만듦
type A = Exclude<number | string | boolean, string>; // T는 (number | string | boolean) 유니온 타입, U는 string타입
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean
// -> 유니온 타입에 never타입이 포함되어 있으면 never타입이 사라짐
// => 유니온 타입은 타입들 간의 합집합 타입을 만드는 것인데 never는 공집합 타입이기 때문에 합집합에 포함되어도 결과에 영향X (무시됨)
// 최종 결과는 number | boolean

type Extract<T, U> = T extends U ? T : never;

// Exclude와 반대되게 T 유니온 타입에서 U에 해당하는 값만 뽑아내게 만듦
type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// never | string | never => never은 제외시킴
// 최종 결과 : string
