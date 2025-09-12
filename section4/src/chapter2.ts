/*
 * 함수 타입의 호환성
 * -> 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * => 두 가지 조건을 모두 만족해야 호환됨
 */

// 기준 1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입으로 10 말고 다른 값은 오류

a = b; // 업캐스팅
// b = a; -> 반환값이 number 타입을 number 리터럴 타입으로 취급하겠다는 뜻(다운 캐스팅) - 에러

// 기준 2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때 -> (매개변수를 기준으로 판단할 때는 업캐스팅 불가, 다운캐스팅 허용)
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; -> 매개변수의 타입을 기준으로 호환성을 판단할 때는 업캐스팅일 때 호환 X
d = c; // 다운 캐스팅일 때 호환 O

type Animal = {
  // 프로퍼티가 더 적으므로 슈퍼타입
  name: string;
};

type Dog = {
  // 서브타입
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; -> 업캐스팅이지만 불가능
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); -> 업캐스팅 할당을 허용해주면 animal에 color가 없어도 쓸 수 있다는 말이기 때문에 호환 X
};

let testFunc2 = (dog: Dog) => {
  // dog 타입은 animal 타입의 서브타입이기 때문에 animal 타입의 객체들이 가지고 있는 모든 프로퍼티를 dog 타입은 가지고 있음
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때 -> (할당하려고 하는 쪽의 함수의 타입 매개변수의 개수가 더 적을 때에만 호환이 가능)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // func1의 매개변수의 개수가 더 많아서 가능
// func2 = func1;
