// number
let num1: number = 123; // : number -> 변수의 이름 뒤에 콜론을 쓰고 타입을 정의하는 것을 타입주석, 타입 어노테이션이라고 부른다
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toFixed(); // number 타입에만 적용할 수 있는 메서드는 적용 가능

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1 = 123; -> 숫자를 넣으려고 하면 오류 발생
// str1.toFixed(); -> 넘버 타입에서만 사용할 수 있는 메서드를 사용해도 오류 발생

// boolean
let boolean1: boolean = true;
let boolean2: boolean = false;

// null
let null1: null = null;

// undifined
let unde1: undefined = undefined;

// number 타입이라 null이 안되지만 tsconfig.json 파일에 "strictNullChecks": false 설정으로 가능
// let numA: number = null;

// 리터럴 타입 -> 타입을 값으로 정의
let numA: 10 = 10; // 타입을 값 10으로만 정의하여 10말고 다른 값은 불가
let strA: "hello" = "hello";
let boolA: true = true;
