/*
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof 연산자는 무조건 타입에만 사용할 수 있음 -> (keyof person처럼 변수 person을 넣을 수 없음)
  // keyof Person 타입은 Person객체 타입으로부터 모든 프로퍼티의 키(name, age)를 유니온 타입으로 추출 -> "name" | "age"
  return person[key];
}

const person: Person = {
  name: "나린",
  age: 26,
};

getPropertyKey(person, "name"); // 나린

// 자바스크립트에서 typeof 연산자는 특정 변수의 타입을 문자열(string) 값으로 반환하는 연산자였음 -> 문자열 : number, string, boolean, object ..
// typeof person === "object";

// 타입스크립트에서 타입을 정의할 때 사용하면 동작이 다르게 바뀜
// 타입스크립트가 추론하는 변수 person의 타입으로 타입이 정의가 됨
// tpye Person = typeof Person;

// const person = {
//    name: "나린",
//    age: 26,
//  };

// function getPropertyKey(person: Person, key: keyof typeof person) {
//   // typeof person -> person변수의 타입을 타입스크립트가 추론한대로 타입이 뽑히고, name프로퍼티가 string, age가 number로 나옴 (객체 타입이 됨)
//   // typeof person에 keyof 연산을 적용하면 "name" | "age"가 됨
//   return person[key];
// }
