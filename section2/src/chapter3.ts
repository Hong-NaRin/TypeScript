// object
// let user: object = {
//   // 타입을 object로 넣으면 값이 객체라는 것 외에 객체의 프로퍼티나 메서드에 뭐가 있는지 알 수 없음
//   id: 1,
//   name: "나린",
// };

// -> 그렇기 때문에 객체 리터럴 타입으로 정의
let user: {
  id?: number; // ?의 의미는 이 프로퍼티가 있어도 되고 없어도 된다는 의미 -> 있을 거면 number 타입이어야 한다. (선택적 프로퍼티)
  name: string;
} = {
  id: 1,
  name: "나린",
};

// user = {
//   name: "홍길동",
// };

let config: {
  readonly apiKey: string; // key 값은 수정되면 안되기 때문에 readonly
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; -> readonly로 읽기 전용 프로퍼티로 만들어서 수정이 불가능하게 만들 수 있음
