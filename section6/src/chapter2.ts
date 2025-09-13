/*
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  // name; -> 추론할 수 있는 정보가 없을 때 암시적으로 any타입이 할당됨(치트키 타입이라 안전하지 않기 때문에 오류가 발생)
  // name: string; -> 이렇게만 작성하면 초기값도 없고, 생성자에 할당도 안되어 있으므로 에러 발생 (생성자에 값을 지정해주거나 name: string = "";으로 작성)
  name: string; // 기본값이 public name: string;
  private age: number;
  protected position: string; // 외부에서 접근이 안되게 막고, 파생 클래스 내부에서는 접근이 되도록 하려면 protected를 사용

  // 생성자
  constructor(name: string, age: number, position: string) {
    // constructor(name: string, private age: number, protected position: string) {
    // 접근 제어자는 생성자의 매개변수 앞에 다는 것도 가능 -> 필드에서 중복으로 정의하면 에러 (생성자에다 달 거면 필드 정의는 생략해줘야 함 )
    // -> 접근 제어자가 붙은 매개변수는 자동으로 필드도 정의하고, 필드의 값 초기화도 자동으로 해주기 때문에 this.name 같은 것을 삭제해도 됨
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.age}살`); // age에 접근하고 싶으면 템플릿 리터럴을 만들어서 메서드 안에서만 접근할 수 있음
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position); // 파생 클래스의 생성자는 super 호출을 포함해야만 함
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.age -> age는 private로 설정했기 때문에 파생 클래스에서도 접근할 수 없게 함
    this.position; // protected -> 파생 클래스 내부에서는 접근 허용
  }
}

const employee = new Employee("나린", 27, "developer");
employee.name = "홍길동"; // 객체의 프로퍼티의 값을 수정할 수 있는 이유는 객체이기 때문도 있지만, Employee 클래스의 각각의 필드에 접근 제어자가 기본값인 public이 설정되어 있음
// employee.age = 30; -> name 프로퍼티는 Private이기 때문에 Employee 클래스 내부에서만 접근할 수 있음 (readonly도 불가능)
// employee.position = "PM"; -> protectd로 외부에서 접근 막음
console.log(employee); // Employee { name: '홍길동', age: 27, position: 'developer' }
