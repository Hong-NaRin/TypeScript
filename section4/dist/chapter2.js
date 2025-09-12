/*
 * 함수 타입의 호환성
 * -> 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * => 두 가지 조건을 모두 만족해야 호환됨
 */
let a = () => 10; // number 타입
let b = () => 10; // number 리터럴 타입으로 10 말고 다른 값은 오류
a = b; // 업캐스팅
let c = (value) => { };
let d = (value) => { };
// c = d; -> 매개변수의 타입을 기준으로 호환성을 판단할 때는 업캐스팅일 때 호환 X
d = c; // 다운 캐스팅일 때 호환 O
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc; -> 업캐스팅이지만 불가능
dogFunc = animalFunc;
let testFunc = (animal) => {
    console.log(animal.name);
    // console.log(animal.color); -> 업캐스팅 할당을 허용해주면 animal에 color가 없어도 쓸 수 있다는 말이기 때문에 호환 X
};
let testFunc2 = (dog) => {
    // dog 타입은 animal 타입의 서브타입이기 때문에 animal 타입의 객체들이 가지고 있는 모든 프로퍼티를 dog 타입은 가지고 있음
    console.log(dog.name);
};
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; // func1의 매개변수의 개수가 더 많아서 가능
export {};
// func2 = func1;
