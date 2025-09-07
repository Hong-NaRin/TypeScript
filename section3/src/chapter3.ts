/*
 * unknown 타입
 */

// unknown 타입이 모든 타입의 슈퍼타입이므로 모든 타입에 업캐스팅이 가능하다.
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다른 타입에 unknown 값을 넣겠다는 건 다운캐스팅 시키겠다는 의미이므로 오류
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/*
 * Never 타입 -> 공집합 : 모든 집합의 부분 집합
 */

function neverExam() {
  function neverFunc(): never {
    // 함수가 반환하는 값의 종류는 '공집합이다' (반환할 수 있는 값의 종류가 아무 것도 없다)라는 의미
    while (true) {}
  }

  // never 타입은 모든 타입의 서브타입이기 때문에 어떤 타입의 변수에도 값을 넣을 수 있음 (업캐스팅)
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅 불가로 오류
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/*
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    // 반환값이 없을 때 void를 사용
    console.log("hi");
    return undefined; // void 타입으로 했지만 업캐스팅으로 undefined 반환 가능함
  }

  // void 타입은 undefined 타입의 슈퍼타입 (업캐스팅)
  let voidVar: void = undefined;
}

/*
 * Any 타입 -> unknown 타입의 서브타입으로 위치해 있지만 치트키 타입임 (타입 계층도를 완벽히 무시함)
 * 결론 : 모든 타입의 슈퍼타입으로 위치하기도 하며, never를 제외한 모든 타입의 서브타입으로 위치하기도 함
 * -> (자신한테 다운 캐스팅 하는 것도 되고, 자신이 다운캐스팅 하는 것도 됨)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // any 타입이 unknown 타입의 서브 타입으로 위치하고 있지만 다운 캐스팅이 가능하다.
  undefinedVar = anyVar; // undifined가 서브 타입, any가 슈퍼 타입 -> undifined 타입에 any타입의 값을 넣고 있으므로 다운 캐스팅이지만 가능하다.
  // neverVar: anyVar; -> never타입에 any타입 값을 넣어 다운캐스팅 하고 있음 (불가능) => never타입은 공집합이기 때문에 어떤 타입도 다운 캐스팅 할 수 없음
}
