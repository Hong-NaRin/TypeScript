/*
 * 기본 타입 간의 호환성
 */
let num1 = 10;
let num2 = 10;
num1 = num2; // num2의 값을 num1에 대입 -> number타입이 number 리터럴 타입의 슈퍼타입임 (업 캐스팅)
let animal = {
    // bread 프로퍼티가 없으니 Dog 타입으로 볼 수 없음
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진도",
};
animal = dog; // dog 값을 animal 변수에 넣을 수 있음(업 캐스팅) -> Animal (슈퍼 타입), Dog (서브 타입)
let book;
let programingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "react.js",
};
book = programingBook; // -> 업 캐스팅
// programingBook = book; -> 다운 캐스팅
/*
 * 초과 프로퍼티 검사
 */
let book2 = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js", -> book = programingBook;으로 업 캐스팅하면 쓸 수 있어야 하지만 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 초과 프로퍼티 검사가 실행됨
};
// 초과 프로퍼티를 피하려면
let book3 = programingBook; // 방법1 - 초기화할 때 객체 리터럴을 사용한 것은 아니기 때문에 초과 프로퍼티가 발생하지 X
function func(book) { } // 방법2 - 함수의 매개변수에 타입 정의
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js" -> 함수를 호출하고 인수로 객체 리터럴을 전달하면 초과 프로퍼티가 발동
});
func(programingBook); // 서브타입 객체를 넣으려고 하면 변수에 저장했다가 변수를 인수로 전달
export {};
