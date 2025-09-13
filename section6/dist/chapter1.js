/*
 * 타입 스크립트의 클래스
 */
const employee = {
    name: "나린",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    // 필드
    // name; -> 추론할 수 있는 정보가 없을 때 암시적으로 any타입이 할당됨(치트키 타입이라 안전하지 않기 때문에 오류가 발생)
    // name: string; -> 이렇게만 작성하면 초기값도 없고, 생성자에 할당도 안되어 있으므로 에러 발생 (생성자에 값을 지정해주거나 name: string = "";으로 작성)
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position); // 파생 클래스의 생성자는 super 호출을 포함해야만 함
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("나린", 27, "개발자");
console.log(employeeB); // Employee { name: '나린', age: 27, position: '개발자' }
// 타입 스크립트의 클래스는 실제 타입으로도 활용할 수 있음 (타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템을 따름)
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
export {};
