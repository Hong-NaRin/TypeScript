// enum 타입 (열거형 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
