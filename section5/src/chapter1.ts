/*
 * 인터페이스의 확장 (상속)
 */

// 기존의 코드는 중복이 많고 비효율적인 방식 -> 슈퍼타입인 Animal의 color프로퍼티를 age프로퍼티로 바꾸려면 서브타입의 프로퍼티들도 일일이 다 바꿔줘야 함
// interface Animal {
//   name: string;
//   color: string;
// }

// interface Dog {
//   name: string;
//   color: string;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   color: string;
//   isScratch: boolean;
// }

// interface Chicken {
//   name: string;
//   color: string;
//   isFly: boolean;
// }

// 인터페이스 확장을 통해 더 효율적으로 사용
interface Animal {
  // 인터페이스로 만든 객체 타입 말고 Animal이 타입 별칭이었다고 해도 확장 가능 -> type Animal ={}
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 인터페이스 Dog는 인터페이스 Animal을 확장하는 타입이다.
  // -> 기존의 Animal 프로퍼티를 다 가지고 있는 상태에서 새로운 프로퍼티를 추가한다는 뜻
  // name: "hello";
  // -> name 프로퍼티를 string 타입에서 string 리터럴 타입으로 다시 재정의할 수도 있음
  // -> Animal이 슈퍼타입이어야 하기 때문에 원본 프로퍼티의 타입의 서브타입이 되도록 재정의 가능 => number 타입으로 같은 걸로 재정의 불가능
  isBark: boolean;
}

const dog: Dog = {
  // 세 개의 프로퍼티를 다 가지고 있는 타입으로 정의가 됨
  name: "", // -> string 리터럴로 재정의 했을 때는 에러 발생
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  // Dog와 Cat을 둘 다 확장하도록 만들 수도 있음 (다중 확장 가능)
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
