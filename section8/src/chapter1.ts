/*
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// function printAuthorInfo(author: { id: number; name: string }) {
// -> Post타입에서 author에 새로운 프로퍼티가 들어오면 interface와 post변수, 매개변수의 타입에도 전부 프로퍼티를 추가해야 함
function printAuthorInfo(author: PostList[number]["author"]) {
  // author는 객체 타입에서 뽑아와야 하니까 number를 써서 요소의 타입을 먼저 뽑고, 이 객체 타입으로부터 author 프로퍼티 타입을 뽑아옴

  // function printAuthorInfo(author: Post["author"]) {
  // 스트링 리터럴 타입으로 뽑아내고 싶은 프로퍼티의 타입을 쓰면 됨 (Post타입으로부터 author 프로퍼티의 value타입인 객체타입만 추출)
  // Post["author"] : 인덱스드 엑세스 타입 (스트링 리터럴[] 타입을 인덱스라고 부르며, 인덱스를 이용해서 특정 타입의 프로퍼티에 접근한다.)
  // -> 객체에 사용할 때, 인덱스에 들어가는 문자열("author")은 값이 아닌 타입임 (타입만 명시할 수 있음)
  // -> function printAuthorInfo(author: Post["author"]["id"]) => author 프로퍼티에서 id 프로퍼티의 타입만 가져오고 싶으면 중첩으로 대괄호를 사용함
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  // 인덱스드 엑세스 타입을 이용할 때, 대괄호 안에 number 타입을 넣어주면 배열 타입으로부터 하나의 요소의 타입만 가져옴 -> [0]을 넣어도 똑같음
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "나린",
    age: 26,
  },
};

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "나린",
//     age: 26,
//   },
// };

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // 0번 인덱스의 타입 - number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; -> 튜플 타입은 길이가 고정된 배열이기 때문에 존재하지 않는 인덱스의 타입을 추출하려고 하면 에러
type TupNum = Tup[number]; // 튜플타입 안에 있는 모든 타입의 최적의 공통 타입을 뽑아옴 -> 세 타입의 유니온 타입 추출 (string | number | boolean )
