/*
 * 타입 추론
 * -> 변수에 타입이 정의되어 있지 않을 때, 변수를 선언하고 초기값을 넣어주기만 해도 초기값을 기준으로 자동으로 변수 타입을 추론
 */
// let은 const보다 범용적인 타입인 number로 추론해줌 -> 조금 더 넓은 타입으로 추론해주는 과정을 '타입 넓히기'라고 함
let a = 10; // 자동으로 number 타입
let b = "hello"; // 자동으로 string 타입 추론
let c = {
    // 변수에 복잡한 객체를 저장해도 추론함
    id: 1,
    name: "카리나",
    profile: {
        nickname: "winter",
    },
    urls: ["https://aespa.com"],
};
let { id, name, profile } = c; // number, string, string
let [one, two, three] = [1, "hello", true]; // number, string, boolean
// 매개변수에 기본값이 설정되어 있다면 매개변수의 타입도 기본값을 기준으로 추론
function func(message = "hello") {
    return "hello";
}
/* --- 타입이 변신하듯이 계속 바뀌는 상황을 Any 타입의 진화라고 함 --- */
// let d: any; -> 명시적으로 정의하는 것과 다름 (명시적으로 정의하면 d는 타입이 바뀌지 않고 계속 any 타입임)
let d; // 초기 값이 없는 경우, any 타입으로 추론 (암묵적 Any 타입으로 추론) ->
d = 10;
d.toFixed; // 위에 숫자값을 넣어서 number 타입으로 추론됨 -> toFixed() 같은 메서드를 쓸 수 있게 됨
// d.toUpperCase(); -> number 타입으로 바꼈기 때문에 불가능
d = "hello";
d.toUpperCase(); // string으로 바껴서 추론이 되고 있음
const num = 10;
// let이 아닌 const로 선언하여 숫자를 넣으면, number 타입이 아니라 number 리터럴 타입으로 추론됨
// -> 어차피 상수이기 때문에 다른 값을 담을리가 없기 때문
const str = "hello"; // string 리터럴 타입
let arr = [1, "string"]; // (number | string)으로 추론
export {};
