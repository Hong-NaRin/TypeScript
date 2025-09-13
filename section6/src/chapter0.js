/*
 * 클래스
 */

// 동일한 형식, 동일한 모양의 객체를 여러개 만들게 되면 중복 코드가 발생하므로 비효율적으로 클래스를 이용하는 게 좋음
// let studentA = {
//   name: "카리나",
//   grade: "A+",
//   age: 27,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// };

// let studentB = {
//   name: "홍길동",
//   grade: "B-",
//   age: 27,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요");
//   },
// }

let studentA = {
  name: "카리나",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드 설정 (클래스가 만들어낼 객체의 프로퍼티를 의미)
  name;
  grade;
  age;

  // 생성자 (실제로 객체를 만드는 메서드)
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("윈터", "B-", 26, "TypeScript");
console.log(studentDeveloper); // StudentDeveloper {name: '윈터', grade: 'B-', age: 26, favoriteSkill: 'TypeScript'}
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// student 인스턴스
let studentB = new Student("카리나", "A+", 27); // 클래스를 호출해서 객체를 생성할 때는 new를 붙임
console.log(studentB); // Student { name: '카리나', grade: 'A+', age: 27 }
studentB.study();
studentB.introduce();
