// 타입 별칭
// 객체 리터럴 타입으로 정의하게 되면 user 같이 똑같은 걸 여러개 작성한다고 치면 코드 중복이 많기 때문에 별칭 사용
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "나린",
  nickname: "urzlul",
  birth: "2000.05.20",
  bio: "안녕하세요",
  location: "서울특별시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "urzlul",
  birth: "2000.05.20",
  bio: "안녕하세요",
  location: "서울특별시",
};

// function func() {
//   // 기본적으로 별칭을 중복으로 적을 수 없으나,
//   // 함수 스코프 안에서 User라는 별칭 이름이 겹치면 스코프 내의 별칭이 사용되고, 밖에서는 위의 User 타입이 사용
//   type User = {};
// }

// 인덱스 시그니처 : 키와 값의 타입이 규칙을 가지고 정의할 때 사용
type CountryCodes = {
  [key: string]: string; // 간단하게 설정해서 계속 추가한다고 하더라도 밑에처럼 더 적을 필요가 없음

  // 키와 값이 전부 string 타입인데 계속 추가할 때마다 string을 추가해줘야 한다면 쓸모가 없어짐 -> 인덱스 시그니처를 사용
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시
};

let countryNumberCodes: CountryNumberCodes = {
  // 아무것도 적지 않아도 [key: string]: number; 규칙을 위반하지만 않으면 모두 허용
  // 빈 객체가 문제가 될 때, 반드시 Korea라는 프로퍼티가 있어야 된다고 한다면 위에 지정하면 됨
  Korea: 410,
  // UnitedState: 840,
  // UnitedKingdom: 826,
};
