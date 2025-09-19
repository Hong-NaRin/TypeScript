/*
 * 맵드 타입
 * -> 객테 타입의 각 속성을 순회하며, 새로운 속성 타입을 정의해서 전혀 다른 형태의 객체 타입을 효율적으로 생성해주는 기능
 * -> 인터페이스에서는 사용 불가능, 타입 별칭으로만 사용 가능
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// User를 선택적으로 원하는 프로퍼티만 수정하려고 하려면 -> 선택적 프로퍼티로 새로 만들어 줌
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// User와 똑같이 생긴 인터페이스를 하나 더 중복으로 만들 필요가 없음 -> 맵드를 이용 (인터페이스에서는 불가, 타입 별칭으로 변경)
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // 대괄호 안은 이 객체의 프로퍼티 키가 무엇이 될 수 있는지 정의, 콜론 뒤는 프로퍼티의 key들이 어떤 value 타입을 가질 것인지 정의
  // -> key값으로 id, name, age가 될 수 있다 (인덱스 시그니처와 달리 콜론이 아니라 in 연산자 이용)
  // User[key] - 인덱스로 사용된 key는 User 객체 타입의 ["id"], User["name"], User["age"] => number, string, number 타입
  // 이런 식으로 만든 맵드 타입은 id는 number, name은 string, age는 number인 객체 타입이 된다.
  // ?를 붙임으로써 맵드 타입이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 된다.
};

type BooleanUser = {
  // [key in "id" | "name" | "age"]: boolean;
  [key in keyof User]: boolean;
  // 프로퍼티의 개수가 많아져서 유니온으로 쓰기 힘들 때 keyof 연산자 활용 (오른쪽에 있는 객체 타입으로부터 프로퍼티의 key들을 유니온 타입으로 반환해줌)
};

// 모든 프로퍼티에 읽기 전용 속성을 부여
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "나린",
    age: 26,
  };
}

const user = fetchUser();
// user.id = 1; -> readonly로 설정해서 수정 불가

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 모든 프로퍼티가 있어도 되고 없어도 되는 PartialUser만 선택적으로 넣어줄 수 있게 바꿈
  // ... 수정하는 기능
}

updateUser({});
