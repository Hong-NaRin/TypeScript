/*
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // :animal is Dog -> 만약에 이 함수가 true를 리턴한다면 animal은 Dog타입이다
  return (animal as Dog).isBark !== undefined; // animal.isBark 에러 발생 -> animal을 Dog 타입으로 단언하면 오류X
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal; // Dog
  } else if (isCat(animal)) {
    animal; // Cat
  }
}
