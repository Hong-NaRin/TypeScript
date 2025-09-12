/*
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [티입의] 결과값을 반환하는지 이야기 -> 타입스크립트
function func(a: number, b: number): number {
  // number 타입의 매개변수, number 타입의 반환값 -> 반환값의 타입이 없어도 return문을 기준으로 number + number = number라고 추론됨
  return a + b;
}

/*
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/*
 *  함수의 매개변수
 */

// tall이 선택적 매개변수이므로 ( string | number | undifined )
function introduce(name = "카리나", age: number, tall?: number) {
  // 타입 정의를 해주지 않아도 매개변수에 기본값을 name="카리나"처럼 문자열로 설정하면 기본값을 기준으로 string으로 추론
  // (name = "카리나", tall?: number, age: number)처럼 필수 매개변수를 선택적 매개변수 뒤에 설정하면 오류나므로, age를 tall 앞에 배치해야 함
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);

  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
    // -> 선택적 매개변수로 undifined일 수도 있는 값이기 때문에 undifined + number는 오류가 나므로, if문 이용해서 number 타입으로 좁히기
  }
}

// introduce(1); -> string타입으로 추론되고 있기 때문에 number 타입은 오류
introduce("카리나", 26, 175);
introduce("카리나", 26); // tall이라는 매개변수를 생략하고 싶다면 변수의 이름 뒤에 ? 설정 -> (선택적 매개변수)

function getSum(...rest: number[]) {
  // ...rest -> 가변적인 길이의 인수들을 전달하면 배열로 묶어서 rest라는 변수에 저장할 수 있도록 함
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
