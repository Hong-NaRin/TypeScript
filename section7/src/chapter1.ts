/*
 * 첫 번째 사례
 */

// 받은 매개변수를 순서를 뒤집은 배열로 반환하는 함수
function swap<T, U>(a: T, b: U) {
  // 필요 시 타입 변수를 여러 개 선언할 수도 있음 <T, U>
  return [b, a];
}

const [a, b] = swap("1", 2); // <T>만 있을 때는 a에 T가 string 타입으로 할당되고, b는 number타입이지만 string 타입으로 할당되기 때문에 에러 발생

/*
 *  두 번째 사례
 */

// 데이터 매개변수에 들어오는 값이 배열이라고 생각하고 data의 0번째 인덱스를 반환하는 함수
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0 -> number 타입으로 추론됨
let str = returnFirstValue(["hello", "mynameis"]); // "hello" -> string 타입으로 추론됨
let str2 = returnFirstValue([1, "hello", "mynameis"]); // string | number (유니온) 타입으로 추론

// str2의 타입이 유니온 타입이 아니라 0번째 인덱스인 number 타입으로 추론되길 원한다면 이와 같은 방법을 쓸 수 있음
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  // -> data의 타입이 튜플이며, 첫 번째 요소의 타입이 T, 그 다음부터 들어올 요소의 타입은 알 필요가 없으니 rest 파라미터를 쓰듯이 unknown을 작성
  return data[0];
}

let str3 = returnFirstValue2([1, "hello", "mynameis"]); // number 타입으로 추론

/*
 * 세 번째 사례
 */

// <T extends { length: number }>가 이해되지 않는다면 참고 -> interface의 extends랑 똑같은 말임
interface InterfaceA {
  length: number;
}

interface interfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  // 데이터의 타입이 T인데 unknown타입으로 보기 때문에 length 프로퍼티가 없어서 오류 발생
  // <T extends { length: number }> : T의 타입은 length가 number인 프로퍼티를 가지고 있는 객체를 확장함
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); -> length 프로퍼티가 없는 값들은 막아주기 때문에 에러
