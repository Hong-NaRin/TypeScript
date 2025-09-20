/*
 * 조건부 타입
 */
let varA; // string
let varB; // number
function removeSpaces(text) {
    // function removeSpaces<T>(text: T): T extends string ? string : undefined {
    // 인수에 string타입의 값을 넣으면 T가 string이 되므로 참으로 string 반환, 아니면 undefined
    if (typeof text === "string") {
        return text.replaceAll(" ", ""); // 공백 문자 모두를 빈 문자열로 바꾸게 설정 (공백 제거)
        // return text.replaceAll(" ", "") as any;
        // 문제 1. 함수 내부에서는 조건부 타입의 결과를 알 수가 없음 -> any 타입으로 단언해줘서 에러 해결해야 함
        // 문제 2. 반환값의 타입을 any로 바꾸면, 무조건 string타입을 반환하기로 약속되어 있는 것을 숫자로 전달해도 any타입이 들어가서 검사가 안되기 때문에 함수 오버로딩을 같이 써줌
        // -> undefined나 string이 아닌 타입을 반환하면 오버로드 시그니처가 문제를 감지하여 타입 정의를 완벽하게 해주고, 에러를 발생시킴
    }
    else {
        return undefined;
    }
}
let result = removeSpaces("hi im winter");
result.toUpperCase(); // string
let result2 = removeSpaces(undefined); // undefined
export {};
