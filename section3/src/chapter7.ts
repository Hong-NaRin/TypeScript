/*
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * -> 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value -> number : toFixed()
// value -> string : toUpperCase()
// value -> Date : getTime()
// value -> Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // 조건문 밖에서는 value가 합집합 유니온이므로 더 좁은 타입에서는 오류가 나지 않지만 넓은 타입에서는 오류
  // value.toUpperCase();
  // value.toFixed();

  if (typeof value === "number") {
    console.log(value.toFixed()); // 조건문 내부에서 value의 타입이 더 좁은 number타입으로 보장이 되기 때문에 메서드를 써도 오류가 발생 X
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // 조건문 내부에서 value의 타입이 더 좁은 string타입으로 추론
    // } else if (typeof value === "object") {  -> object를 쓰면 null 타입도 들어있기 때문에 getTime() 오류
  } else if (value instanceof Date) {
    // instanceof : value의 값이 Date 객체인가? -> null은 조건문을 통과할 수 없음
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value가 있을 때에만, value 값에 age라는 프로퍼티가 있다면 true, 아니면 false
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
