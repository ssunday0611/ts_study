// interface 사용하기
// interface -> 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법

// 클래스에 특정 조건을 준수해야함을 명시할때 Interface를 사용하여 요구사항을 설정.
//  implements를 이용해 해당 클래스가 요구사항을 구현하는 것을 명시

// Shape라는 interface 설정
interface Shape {
    getArea(): number;
    // Shape interface에는 getArea라는 함수가 꼭 있어야함
    // 반환값은 숫자
}

class Circle implements Shape{
    // implements키워드를 이용해 해당 클래스가 Shape interface의 조건을 충족하겟다고 명시

    // radius: number;
    // 멤버 변수 radius 값 설정.

    // public accessor은 특정 값이 클래스 밖에서도 조회 가능하다.
    constructor(public radius: number){
        this.radius = radius;
    }

    //너비 구하는 공식
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width : number;
    height : number;

    constructor(width : number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})