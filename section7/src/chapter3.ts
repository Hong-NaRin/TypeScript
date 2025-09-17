/*
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  // K, V -> 타입 변수 (= 타입 파라미터, 제네릭 타입 변수, 제네릭 파라미터 전부 같은 말)
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할 때, 반드시 타입으로 정의할 때 타입 변수에 할당할 타입을 <>와 함께 사용하여야 함.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/*
 * 인덱스 시그니처
 * -> 프로퍼티의 키와 값 타입에 관련된 규칙만 만족하면 어떤 객체든 허용
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123, // 무엇이든 허용
};

// 제네릭 인터페이스와 인덱스 시그니처를 함께 사용하면 유연하게 타입을 정의할 수 있음
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/*
 *  제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

// 제네릭 인터페이스처럼 제네릭 별칭도 타입으로 사용할 때 타입 변수에 할당할 타입을 지정해줘야 함
let stringMap2: Map2<string> = {
  key: "hello",
};

/*
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student"; // 타입이 string 리터럴로 student
  school: string;
}

interface Developer {
  type: "developer"; // 타입이 string 리터럴로 developer (Student와 서로소 집합), Student와 유니온으로 묶으면 서로소 유니온 타입
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 매개변수 타입 : 유저 타입인데 타입 변수 T의 Student를 할당
  if (user.profile.type !== "student") {
    console.log("잘못 오셨습니다.");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  // 프로필이 Developer 타입인 유저 타입
  name: "나린",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const StudentUser: User<Student> = {
  // 프로필이 Student 타입인 유저 타입
  name: "고윤정",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

goToSchool(StudentUser);
