/*
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 특정 객체타입을 새로운 객체타입으로 변환하는 작업 -> 맵드타입 이용
type Partial<T> = {
  [key in keyof T]?: T[key];
  // keyof -> 특정 객체 타입으로부터 모든 키를 유니온 타입으로 추출하는 연산자
  // 왼쪽의 키가 오른쪽의 유니온 타입에 하나씩 맵핑 (타입변수 T에 들어온 객체타입의 키를 모두 가짐)
  // T[key] -> 인덱스드 엑세스 타입 (특정 객체나 배열로부터 특정 프로퍼티의 타입을 추출하는 타입) - 타입변수 T에 들어온 객체타입으로부터 키에 해당하는 value 타입을 추출
  // 대괄호 오른쪽에 ?를 이용해 타입 변수로 전달한 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿈
};

// Partial - 타입 변수로 전달한 Post타입의 모든 프로퍼티를 선택적 프로퍼티로 만드는 유틸리티 타입
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안 ...",
};

/*
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required 타입을 직접 구현 (밑이랑 똑같음)
type Required<T> = {
  [key in keyof T]-?: T[key]; // -?는 ?를 빼겠다는 뜻 -> 선택적이지 않은 프로퍼티가 됨
};

const widthThumbnailPost: Required<Post> = {
  title: "한입 타입스크립트 후기",
  tags: ["ts"],
  content: "",
  // 선택적 프로퍼티로 존재하지 않더라도 오류가 나지 않지만 썸네일 프로퍼티가 반드시 있어야 될 때 문제가 발생하게 됨
  // -> Required 타입을 이용 (선택적 프로퍼티도 필수 프로퍼티가 되어서 반드시 사용하도록 강제할 수 있음)
  thumbnailURL: "https://...",
};

/*
 * Readonly<T>
 * -> 읽기 전용, 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어 주는 타입
 */

// Readonly타입 직접 구현 (밑이랑 같음)
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = ""; -> 수정 불가능
