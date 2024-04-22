"use strict";
// interface 사용하기
// interface -> 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법
class Circle {
    // 멤버 변수 radius 값 설정.
    constructor(radius) {
        this.radius = radius;
    }
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
