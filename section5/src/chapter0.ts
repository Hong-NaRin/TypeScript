/*
 * 인터페이스
 */

// interface Person {
//   name: string;
//   age: number;
// }

interface Person {
  readonly name: string; // readonly도 가능함
  age?: number; // 선택적 프로퍼티도 가능함
  sayHi(): void; // 메서드도 가능
  sayHi(a: number, b: number): void;
}

// 인터페이스에 인터섹션이나 유니온을 이용해야 한다면
type Type1 = number | string | Person; // -> 1. 별칭에다 활용을 하거나
type Type2 = number & string & Person;

const person: Person | number = {
  // 2. 타입 주석에 활용해야 함
  name: "카리나",
  // age: 26,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "홍길동" -> name 프로퍼티가 읽기 전용이 되었으니 수정 불가

person.sayHi();
person.sayHi(1, 2);
