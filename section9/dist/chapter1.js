/*
 * 분산적인 조건부 타입
 * -> 조건부 타입을 유니온과 함께 사용할 때, 조건부 타입이 분산적으로 동작하게 업그레이드 시킨 기능
 */
let a; // string
let b; // number
let c;
// 원래대로라면 T가 number,string 유니온 타입(number와 string의 합집합)이 되면, number타입의 슈퍼타입이기 때문에 거짓으로 number가 나와야 하지만
// -> 조건부 타입에 타입 변수로 유니온 타입을 할당하면 일반적인 조건부 타입이 아닌, 분산적인 조건부 타입으로 업그레이드 되기 때문에 string | number로 반환됨
// 타입 변수에 유니온을 할당하게 되면 그대로 타입 변수에 들어오는 게 아니라 한 번은 number, 한 번은 string으로 분리되어 들어가게 됨
// -> StringNumberSwitch<number> - string | StringNumberSwitch<string> - number 식으로 묶이게 됨
let d;
export {};
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
