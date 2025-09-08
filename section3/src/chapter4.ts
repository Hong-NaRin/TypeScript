/*
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/*
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // 작성한 타입 모두 가능
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person; // 둘 중 하나만 충족해도 됨

let union1: Union1 = {
  // Dog로 허용
  name: "",
  color: "",
};

let union2: Union1 = {
  // Person으로 인정 가능
  name: "",
  language: "",
};

let union3: Union1 = {
  // Dog이면서 Person이기도 하니까 허용
  name: "",
  color: "",
  language: "",
};

// union4는 Union1의 합집합 바깥(Person, Dog, 두 개를 포함하는 교집합 어디에도 포함되어 있지 않음)에 있으므로 오류가 발생
// let union4: Union1 = {
//   name: "",
// };

/*
 * 2. 교집합 타입 - Intersection 타입
 * -> 수학적인 교집합은 공통 원소를 뜻하지만,
 * -> 타입 스크립트는 집합의 원소가 '값'이 아니라 '조건(타입)'이라는 점에서 의미가 다름.
 */

let variable: number & string; // number 타입과 string 타입의 교집합을 말함 -> 교집합이 없어서 공집합 never 타입으로 만들어짐

type Intersection = Dog & Person; // 두 집합에 동시에 속하는 값들 → 즉, name, color, language 전부 가진 객체

let Intersection: Intersection = {
  // 프로퍼티가 하나라도 빠지면 오류
  name: "",
  color: "",
  language: "",
};
