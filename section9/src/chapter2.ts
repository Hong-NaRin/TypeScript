/*
 * infer
 * -> inference -> 추론하다
 */
type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // FuncA타입( () => string )이 extends 오른쪽에 있는 () => string타입의 서브타입이면 string, 아니면 never (똑같은 타입끼리는 서브, 슈퍼 상관없음)

type B = ReturnType<FuncB>; // () => number 타입과  () => string타입은 서로소 집합 -> never

// ↑는 extends 우항에 비교하는 타입에 string으로 고정해뒀기 때문에 함수의 반환값 타입이 string타입이냐는 것밖에 검사하지 못함 -> infer를 이용해서 해결
type ReturnType2<T> = T extends () => infer R ? R : never;
// () => string가 () => R의 서브타입이냐 비교함 -> infer와 함께 쓴 R타입은 조건식을 참으로 만드는 타입을 추론하도록 동작

type C = ReturnType2<FuncA>; // string (extends 기준으로 왼쪽이 오른쪽의 서브타입이 되려면 R은 string타입으로 추론됨)
type D = ReturnType2<FuncB>; // number

type E = ReturnType2<number>; // never -> T에 number가 들어가면 number타입이 () => infer R의 서브타입이 될 수 있는 R 타입을 추론하려고 하면 무엇이든 추론 불가능(any도 불가)

/*
 * 예제
 */

// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

//  PromiseUnpack타입의 역할 -> 타입변수 T에 제공한 Promise타입에서 결과값 타입만 가져오는 기능
type PromiseA = PromiseUnpack<Promise<number>>; // Promise<number> 타입이 Promise<infer R>의 서브타입이 되는 R타입을 추론 -> number

type PromiseB = PromiseUnpack<Promise<string>>; // string
