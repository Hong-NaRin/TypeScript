/*
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6] -> number타입으로 추론

function map<T, U>(arr: T[], callback: (item: T) => U) {
  // arr: T[]는 T 타입 요소들로 이루어진 배열이므로, 각 원소 T를 받아 처리하기 때문에 (item: T[])가 아닌 (item: T)
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2); // arr이 number타입이라면 매개변수 it - (it)도 number타입이여야 함
map(["hi", "hello"], (it) => it.toUpperCase()); // string타입으로 추론

// string타입을 number타입으로 전달하면 매치가 안되지만 map 메서드는 그것도 가능하게 해야함 (모든 타입의 배열이 나오게 할 수 있어야 함)
// arr에 string배열 타입 -> T가 string타입, 매개변수 Item의 타입도 string이 되는데 콜백함수 반환값의 타입은 number타입임 -> U의 타입이 이때 추론되면서 number타입이 됨
map(["hi", "hello"], (it) => parseInt(it));

/*
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  // forEach 메서드는 어차피 아무것도 반환하지 않기 때문에 void를 사용해도 됨
  for (let i = 0; i < arr2.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  // arr이 number[] 타입이면 it도 number가 되어야 함
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it; // string[]이므로 string으로 추론
});
