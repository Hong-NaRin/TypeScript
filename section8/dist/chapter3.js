/*
 * 맵드 타입
 * -> 객테 타입의 각 속성을 순회하며, 새로운 속성 타입을 정의해서 전혀 다른 형태의 객체 타입을 효율적으로 생성해주는 기능
 * -> 인터페이스에서는 사용 불가능, 타입 별칭으로만 사용 가능
 */
// 한 명의 유저 정보를 불러오는 기능
function fetchUser() {
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
function updateUser(user) {
    // 모든 프로퍼티가 있어도 되고 없어도 되는 PartialUser만 선택적으로 넣어줄 수 있게 바꿈
    // ... 수정하는 기능
}
updateUser({});
export {};
