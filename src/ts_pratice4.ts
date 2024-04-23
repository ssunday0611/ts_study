// type alias 사용하기
// type은 특정 타입에 별칭을 붙이는 용도로 사용.

type Person2 = {
    name: string;
    age?: number;
}

// & -> intersection 으로 두개 이상의 타입을 합쳐줌
type Developer2 = Person &{
    skills: string[];
};

const person2: Person2 = {
    name: '김사람'
}

const expert2: Developer2 = {
    name: '김개발',
    skills: ['java', 'react']
};

// Person[] 을 이제 People이라는 타입으로 사용
type People = Person[];
const people2: People = [person2, expert2];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors: Color[] = ['red', 'orange'];