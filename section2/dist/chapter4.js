let user = {
    id: 1,
    name: "나린",
    nickname: "urzlul",
    birth: "2000.05.20",
    bio: "안녕하세요",
    location: "서울특별시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "urzlul",
    birth: "2000.05.20",
    bio: "안녕하세요",
    location: "서울특별시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    // 아무것도 적지 않아도 [key: string]: number; 규칙을 위반하지만 않으면 모두 허용
    // 빈 객체가 문제가 될 때, 반드시 Korea라는 프로퍼티가 있어야 된다고 한다면 위에 지정하면 됨
    Korea: 410,
    // UnitedState: 840,
    // UnitedKingdom: 826,
};
export {};
