/*
 * 인터페이스와 클래스
 */
// 캐릭터 객체를 실제로 생성할 클래스 만들기
class Character {
    name;
    moveSpeed;
    extra;
    // Character는 CharacterInterface 설계도를 구현
    // 필드 -> 접근 제어자를 매개변수 앞에 달아줬기 때문에 필드 정의 생략할 수 있음
    // name: string;
    // moveSpeed: number;
    constructor(name, // 인터페이스는 무조건 public 필드만 정의할 수 있음
    moveSpeed, extra // private이나 protected 필드가 필요하다면 interface에 정의하지 말고 따로 설정해줘야 함
    ) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
        // 접근 제어자는 생성자의 매개변수 앞에 작성하면 자동으로 구현해주므로 생략
        // this.name = name;
        // this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
export {};
