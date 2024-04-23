"use strict";
// interface 사용하기
// interface -> 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법
class Circle {
    // implements키워드를 이용해 해당 클래스가 Shape interface의 조건을 충족하겟다고 명시
    // radius: number;
    // 멤버 변수 radius 값 설정.
    // public accessor은 특정 값이 클래스 밖에서도 조회 가능하다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    //너비 구하는 공식
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
