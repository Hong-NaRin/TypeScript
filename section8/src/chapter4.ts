/*
 * 템플릿 리터럴 타입
 * -> string 리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 만드는 기능
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// Color로 올 수 있는 모든 유니온 타입과 Animal로 올 수 있는 모든 유니온 타입이 다 조합된 타입으로 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "black-cat"; // "red-dog", "red-cat" 등 전부 가능
