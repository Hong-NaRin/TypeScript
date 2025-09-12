/*
 * 인터페이스
 */
const person = {
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
export {};
