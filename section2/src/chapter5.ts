// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
enum Role { // enum은 별칭과 다르게 "=" 없이 바로 중괄호
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

// role을 숫자만 보고 기억하기 어려울 수 있기 때문에 이럴 경우 enum을 사용함
const user1 = {
  name: "카리나",
  // role: 0, // 0 -> 관리자
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: "윈터",
  role: Role.USER, // 1 -> 일반 유저
};
const user3 = {
  name: "닝닝",
  role: Role.GUEST, // 2 -> 게스트
};

console.log(user1, user2, user3);
