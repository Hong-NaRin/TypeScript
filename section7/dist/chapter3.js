/*
 * 제네릭 인터페이스
 */
// 제네릭 인터페이스를 사용할 때, 반드시 타입으로 정의할 때 타입 변수에 할당할 타입을 <>와 함께 사용하여야 함.
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -1231,
    key2: 123123, // 무엇이든 허용
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
// 제네릭 인터페이스처럼 제네릭 별칭도 타입으로 사용할 때 타입 변수에 할당할 타입을 지정해줘야 함
let stringMap2 = {
    key: "hello",
};
function goToSchool(user) {
    // 매개변수 타입 : 유저 타입인데 타입 변수 T의 Student를 할당
    if (user.profile.type !== "student") {
        console.log("잘못 오셨습니다.");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    // 프로필이 Developer 타입인 유저 타입
    name: "나린",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
const StudentUser = {
    // 프로필이 Student 타입인 유저 타입
    name: "고윤정",
    profile: {
        type: "student",
        school: "서울대학교",
    },
};
goToSchool(StudentUser);
export {};
