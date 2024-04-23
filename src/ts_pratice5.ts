// Generics 제네릭
// 타입스크립트에서 함수, 클래스, 인터페이스, 타입을 사용할 때 여러종류의 호환에 맞춰야하는 상황헤서 사용함

//함수에서 쓰기
//a와 b에 어떤 타입이 올지 모르니 any라고 사용 가능
// 제네릭을 사요ㅇ하면 뭐든 들어올수있고 사용할때 깨지지 않음
function merge<A, B>( a: any, b:any ):any {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo:1 }, {bar:1});

function wrap<T> (param: T){
    return {
        param
    }
}

const wrapped = wrap(10);


//interface에서 제네릭 사용
type Items<T> = {
    list: T[];
}

const items: Items<string> = {
    list: ['a','b', 'c']
};


// class에서 제네릭 사용
class Queue<T> {
    list: T[] = [];
    get length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
