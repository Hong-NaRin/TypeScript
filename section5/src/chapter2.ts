/*
 * 선언 합침
 */

// type Person = {} -> 동일한 타입을 2번 정의하면 오류가 발생
// 인터페이스는 동일한 이름으로 선언해도 오류가 발생하지 않음 -> 동일한 이름으로 정의한 인터페이스는 다 합쳐지기 때문 (선언 합침)
interface Person {
  name: string;
}

interface Person {
  // name: number; -> 동일한 프로퍼티를 중복 정의하는데 타입을 다르게 정의하는 것을 '충돌'이라고 함 => 인터페이스는 충돌을 허용하지 않음 (타입 똑같이)
  // name: "hello"; -> 확장할 때는 원본 타입의 서브타입이기만 하면 돼서 프로퍼티의 타입이 똑같지 않아도 됐었음 => 확장이 아닌 합침의 상황에서는 문제가 발생하며, 반드시 동일한 타입이어야만 함
  name: string;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 26,
};

/*
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 임의대로 객체를 추가할 수 없으므로 Lib 인터페이스를 다시 정의해서 c: stirng을 추가하여 모듈 타입을 보강
};
