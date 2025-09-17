/*
 * 제네릭 클래스
 */

// 밑에처럼 중복된 코드들을 제네릭 클래스 <T>로 만들어 효율적으로 사용
class List<T> {
  // private 등 접근 제어자가 달려 있으면 필드와 this.list = list 같은 것들은 자동으로 해주기 때문에 생략
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// class NumberList {
//   // private 등 접근 제어자가 달려 있으면 필드와 this.list = list 같은 것들은 자동으로 해주기 때문에 생략
//   constructor(private list: number[]) {}
//   push(data: number) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// class StringList {
//   constructor(private list: string[]) {}
//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new List([1, 2, 3]); // T는 number 타입으로 추론 -> 생성자의 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론
// -> 제네릭 인터페이스나 제네릭 타입변수와는 다르게 List<number> 같이 명시하지 않아도 됨
numberList.pop(); // [1, 2]
numberList.push(4); // [1, 2, 4]
numberList.print(); // [1, 2, 4]

const stringList = new List(["1", "2"]); // T는 string 타입으로 추론
stringList.push("hello"); // ["1", "2", "hello"]
