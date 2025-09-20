/*
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Pick 타입 직접 만들기 -> 객체의 타입을 변환하는 거니까 맵드타입 이용
type Pick<T, K extends keyof T> = {
  // T타입에 Post 같은 객체 타입, 타입변수 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체 타입의 키값들을 추출한 유니온 타입의 서브타입만 들어올 수 있음
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content'이 오른쪽의 서브타입이므로 참이 됨
  // 𖤐𖤐𖤐 주의 : 객체 타입에서는 프로퍼티가 적은 쪽이 슈퍼타입이 되지만, 유니온 타입에서는 연산에 참여하는 타입이 많을수록 슈퍼타입이 된다.
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  // 2번째 타입변수는 고르고 싶은 프로퍼티만 씀 (Post타입에서 title과 content만 골라냄)
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/*
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> Pick과 반대로 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title
// Pick<Post, Exclude<keyof Post, 'title'> => Post의 키 집합에서 "title" 제거
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/*
 * Record<K, V>
 */

type ThumbnailLegacy = {
  large: {
    url: string;
    size: number;
  };
  medium: {
    url: string;
    size: number;
  };
  small: {
    url: string;
    size: number;
  };
  watch: {
    url: string;
    size: number;
  };
};

// 위에랑 똑같은 결과
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
// 1번째 타입 변수로는 객체의 프로퍼티 키를 유니온으로 받고, 2번째 타입 변수로는 키들의 value 타입을 받는다

// Record 타입 직접 구현하기
type Record<K extends keyof any, V> = {
  // K는 키 ("large" | "medium" | "small" | "watch"), V는 value의 타입 ( url: string; size: number)
  // any가 무슨 타입이 될 지 모르겠는데, 적어도 K에 들어오는 타입은 어떤 객체 타입의 키를 추출해놓은 유니온 타입이라는 뜻
  [key in K]: V;
};
