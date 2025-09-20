/*
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
// Partial - 타입 변수로 전달한 Post타입의 모든 프로퍼티를 선택적 프로퍼티로 만드는 유틸리티 타입
const draft = {
    title: "제목 나중에 짓자",
    content: "초안 ...",
};
const widthThumbnailPost = {
    title: "한입 타입스크립트 후기",
    tags: ["ts"],
    content: "",
    // 선택적 프로퍼티로 존재하지 않더라도 오류가 나지 않지만 썸네일 프로퍼티가 반드시 있어야 될 때 문제가 발생하게 됨
    // -> Required 타입을 이용 (선택적 프로퍼티도 필수 프로퍼티가 되어서 반드시 사용하도록 강제할 수 있음)
    thumbnailURL: "https://...",
};
const readonlyPost = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};
export {};
// readonlyPost.content = ""; -> 수정 불가능
