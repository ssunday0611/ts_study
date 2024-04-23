// 일반 객체를 interface로 타입 설정하기

interface Person {
    name : string;
    // ? 는 설정해도 괜춘 안해도 괜춘
    age? : number;
}

// interface Developer{
//     name: string;
//     age?: number;
//     skills: string[];
// }


//person 과 developer의 형태가 유사하면 다른 인터페이스를 상속받아 사용 가능
interface Developer extends Person{
    skills: string[];
}

const person: Person = {
    name:'김사람',
    age:20
};

const expert: Developer = {
    name: '나해선',
    skills: ['javascript', 'react']
};



const people: Person[] = [person, expert];