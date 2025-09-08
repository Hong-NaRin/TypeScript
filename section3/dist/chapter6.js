/*
 * 타입 단언 (type assertion)
 */
// let person: Person = {}; 이나 let person = {}; 오류 발생
let person = {}; // 초기화 값의 타입을 단언
person.name = "카리나";
person.age = 26;
let dog = {
    // Dog를 적지 않아도 자동으로 Dog 타입으로 추론
    name: "돌돌이",
    color: "brown",
    bread: "진도",
}; // -> 단언하지 않으면 bread는 초과 프로퍼티 검사 실행으로 오류 (Dog 타입에 없는 프로퍼티는 허용 X)
/*
 * 타입 단언의 규칙
 * 값 as 단언 -> 단언식
 * A as B
 * A가 B의 슈퍼타입이거나, A가 B의 서브타입이어야 함.
 */
let num1 = 10; // never은 모든 타입의 서브타입 -> A(number)가 B(never)의 슈퍼타입이기 때문에 규칙 만족
let num2 = 10; // unknown은 모든 타입의 슈퍼타입(전체 집합) -> A가 B의 서브타입이기 때문에 규칙 만족
// let num3 = 10 as string;  -> number와 string은 교집합이 없는 타입이기 때문에 슈퍼와 서브가 성립될 수 없으므로 오류
let num3 = 10; // number에 unknown(슈퍼)타입으로 단언하고 string(서브)타입으로 단언하면 성립될 수 있음 -> 추천X
/*
 * const 단언
 */
let num4 = 10; // 원래는 number타입이지만 const를 통해 number 리터럴 타입 10으로 추론됨
let cat = {
    name: "야옹이",
    color: "black",
}; // 객체 리터럴 값 뒤에 as const를 붙이면 모든 프로퍼티가 readonly 프로퍼티로 만들 수 있음
let post = {
    title: "게시글1",
    author: "카리나",
};
// const len: number = post.author?.length;
// ?는 자바스크립트에서 제공하는 옵셔널 체이닝
// -> author 프로퍼티 값이 null이거나 undifined일 경우, 오류가 발생하니 author라는 프로퍼티가 없으면 값 전체가 undifined가 되도록 만들어줌
// number | undifined -> 옵셔널 체이닝으로 값 자체가 undifined이 될 수도 있으므로 오류가 발생할 수 있으므로 '?' 대신 '!'으로 바꿔주면 됨
const len = post.author.length; // ! -> null이거나 undifined이 아닐 거라고 믿도록 만듦
export {};
