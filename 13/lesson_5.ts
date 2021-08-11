console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// //@ts-ignore
// function Test(name) {
//     //@ts-ignore
//     this.name = name;
//     //return 10;
//     // return {
//     //     age: 50,
//     // }
// }
// //@ts-ignore
// let obj = new Test('Evgen');
//
// console.log(obj)

// type TestType = {
//     name: string,
// }
//
// function Test(this: TestType, name: string): TestType {
//     this.name = name;
//     return this;
// }
//
// let obj = new (Test as any)('Hanna');
//
// console.log(obj)

//console.log(this)


// let obj = { name: 'Evgen', sayHi() {
//         console.log('this in function declaration ', this);
//     }
// };
// obj.sayHi();
//
// function f() {
//     console.log('this in function declaration ', this);
// }
//
// f();
//
// let obj2 = { name: 'Vlad'};
//
// obj2.f = f;
// obj2.f()


// const arrow = () => {
//     console.log('this in arrow function ', this);
// }
//
// //arrow();
//
// let obj = {name: 'Evgen'};
//
// obj.a = arrow;
// obj.a()


// let obj = {
//     name: 'Evgen',
//     f() {
//         console.log('this in FD', this);
//     },
//     a: () => {
//         console.log('this in arrow', this);
//     }
// }
//
// obj.f();
// obj.a();


// const arrow = () => {
//     console.log('this in arrow function ', this);
// }
//
// let obj = {
//     name: 'Evgen',
//     f() {
//         console.log('this in FD', this);
//         arrow();
//     },
// }
//
// obj.f();


// let obj = {
//     name: 'Evgen',
//     f() {
//         console.log('this in FD', this);
//         return () => {
//             console.log('this in arrow function ', this);
//         }
//     },
// }
//
// let a = obj.f();
// a();

// let obj = {
//     name: 'Evgen',
//     f: () => {
//         console.log('this in arrow function ', this);
//         return function () {
//             console.log('this in FD', this);
//         }
//     },
// }
//
// let a = obj.f();
// a();


// let obj = {
//     name: 'Evgen',
//     f() {
//         setTimeout(() => {
//             console.log('this in arrow function ', this);
//         }, 0 );
//         setTimeout(function() {
//             console.log('this in FD', this);
//         }, 0);
//     },
// }
//
// obj.f();

// let obj = {
//     name: 'Evgen',
//     f: () => {
//         setTimeout(() => {
//             console.log('this in arrow function ', this);
//         }, 0);
//         setTimeout(function () {
//             console.log('this in FD', this);
//         }, 0);
//     },
// }
//
// obj.f();

// Call, Apply, Bind

// let obj = {name: 'Evgen'};
//
// function test(a1:any, a2:any, a3:any) {
//     //@ts-ignore
//     console.log(this.name, a1, a2, a3);
// }

// let bindFunc = test.bind(obj);
// bindFunc();
//test.bind(obj)();
//test.bind(obj,'Hi', 20)(50);

// let bindFunc = test.bind(obj);
// //@ts-ignore
// bindFunc(100, 800, 500);

// test.call(obj, 100, 500, 1000);
// test.apply(obj, [100, 500, 1000]);


// let obj = {
//     name: 'Evgen',
//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// }
//
// let obj2 = {
//     name: 'Hanna',
// }
//
// obj2.sayHi = obj.sayHi.bind(obj);
// obj2.sayHi();

// function test() {
//     setTimeout(obj.sayHi.bind(obj), 0);
// }
//
// test()

let obj = {
    name: 'Evgen',
    sayName(a1:any, a2:any) {
        console.log(this.name, a1, a2);
    }
}

let obj2 = {
    name: 'Helen',
}

let obj3 = {
    name: 'Adam',
}

//@ts-ignore
let result = obj.sayName.bind(obj3, 100).bind(obj2, 200);
//@ts-ignore
result();

// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32
}

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = { name: 'One' };
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};

function bindNum(f:Function, n:number) {
    return f.bind(null, n);
}

let bindTen = bindNum(sumTwoNumbers, 10);

console.log(bindTen(10));






// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};