/*
 * 인터페이스의 확장 (상속)
 */
const dog = {
    // 세 개의 프로퍼티를 다 가지고 있는 타입으로 정의가 됨
    name: "", // -> string 리터럴로 재정의 했을 때는 에러 발생
    color: "",
    isBark: true,
};
const dogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
};
export {};
