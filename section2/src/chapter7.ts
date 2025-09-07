// void -> 공허 -> 아무 것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  // 출력만 하고 아무 값도 반환하지 않기 때문에 void 사용
  console.log("hello");
}

let a: void; // 변수의 타입으로도 void를 정의하면 어떤 값도 담을 수 없음
// a = 1, a = "hello", a = {}; -> 오류
a = undefined; // 오직 undefined만 담을 수 있음
// a = null; -> tsconfig.json에서 "strictNullChecks": false 설정하면 null도 쓸 수 있음

// void를 쓰는 이유 :
// void가 아닌 undefined이나 null을 쓰면
// 무조건 undefined은 undefined으로, null은 null로 반환을 해야 함
// -> return을 사용하고 싶지 않은 함수의 반환값 타입으로 void를 씀
function func3(): undefined {
  console.log("hello");
  return undefined;
}

// never -> 존재하지 않는, 불가능한 타입
function func4(): never {
  // void는 함수가 정상적으로 종료는 되지만 반환 값이 없어서 쓰는 것
  // 반환을 할 수가 없을 때, 정상적으로 종료가 될 수 없을 때 never 사용
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// b = 1, b = {}, b = "", b = undifined => 전부 불가능
// b = null; -> never 타입은 tsconfig.json에서 "strictNullChecks": false해도 불가능
// b = anyVar; -> any 타입의 값도 never 타입의 변수에는 절대 담을 수 없음.
