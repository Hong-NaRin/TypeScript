/*
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */
const legacyPost = {
    // 2번째 타입변수는 고르고 싶은 프로퍼티만 씀 (Post타입에서 title과 content만 골라냄)
    title: "옛날 글",
    content: "옛날 컨텐츠",
};
// T = Post, K = 'title
// Pick<Post, Exclude<keyof Post, 'title'> => Post의 키 집합에서 "title" 제거
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
const noTitlePost = {
    content: "",
    tags: [],
    thumbnailURL: "",
};
export {};
