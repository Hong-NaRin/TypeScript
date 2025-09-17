/*
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20); -> 프로미스는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에 타입 변수로 비동기 처리의 결과값을 정의해줄 수 있지만 reject는 정해줄 수 없음
    reject(" ~~ 때문에 실패 "); // 매개변수 reason이 선택적 매개변수고 any 타입으로 정의가 되어 있어서 아무 타입이나 전달할 수 있으므로 가능
  }, 3000);
});

promise
  // resolve로 성공했을 때
  .then((response) => {
    console.log(response * 10); // 200 -> Promise를 <number> 타입으로 추론하지 않으면 unknown 타입이여서 에러 발생
  })

  // reject 실패했을 때
  .catch((err) => {
    // reject가 any로 잡혀있기 때문에 err의 타입이 any로 잡힘 (타입 좁혀서 사용)
    if (typeof err === "string") {
      console.log(err);
    }
  });

/*
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 타입 할당하는 방법 1. (추천)
function fetchPost(): Promise<Post> {
  // function fetchPost() {
  // 방법 2.
  // return new Promise<Post>((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  console.log(post.id); // unknown으로 잡히기 때문에 에러가 발생하므로 타입을 할당해줘야 함
});
