/*
 * 제네릭 (일반적인, 포괄적인)
 */
function example(value) {
    return value;
}
// 함수의 반환값 타입은 해당 함수의 리턴값을 기준으로 추론된다.
// -> value의 타입이 any가 아니라면 전부 에러가 발생, value를 any타입으로 바꾼다고 하여도 인수에 넣은 값을 따라 number, boolean, string 타입으로 바뀌지 않고 any로 추론
// -> any는 toUpperCase(), toFixed() 같은 걸 제대로 탐지하지 못하기 때문에 unknown을 쓴다고 하여도 (tpyeof num === 'number) 같은 타입 좁히기를 해야 돼서 불편함
// let num = example(10);
// let bool = example(true);
// let str = example("string");
// 위의 문제를 해결하기 위해 제네릭을 씀 (인수를 전달한 값에 따라 타입이 number, boolean, string 등 자동으로 변함)
// 제네릭 함수 -> 모든 타입에 두루 쓸 수 있는 범용적인 함수
function func(value) {
    // <> 안의 T : 타입 변수 (타입을 담는 변수) -> 함수를 호출할 때마다 결정됨
    // 10을 value로 넣었을 때 T의 타입이 number로 추론되는 것
    // value를 string타입의 값을 받아 :T가 string타입으로 바껴서 <T>와 ():T도 string이 됨, 매개변수로 string을 받고 string 타입을 반환하는 함수로 func가 호출할 때 바뀜
    return value;
}
let num = func(10); // number 타입으로 추론
let bool = func(true); // boolean 타입
let str = func("string"); // string 타입
let arr = func([1, 2, 3]); // number[] 타입 추론
let arr2 = func([1, 2, 3]); // 튜플로 추론하는 방법 1 -> 타입 단언을 통해 튜플 타입으로 추론
let arr3 = func([1, 2, 3]); // 방법 2 -> [number, number, number]가 <T>에 할당되고 튜플 타입으로 반환
export {};
