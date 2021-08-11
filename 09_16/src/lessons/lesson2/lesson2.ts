console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

//function, loops, anonimus code, switch, try/catch, if/else

let globalScope = {
    outerScope: null,
    a: undefined,
    f: 'Function',
    //a: 10 ,
    //     f: 'Function',
    //b: 50
}

f()

function f() {
    let functionScope = {
        outerScope: globalScope,
        c: undefined,
        arg1: undefined,
        //c: 50,
        //s: 100,
        //arg1: 5,
    }
    var c = 50
    let s = 100
}

var a = 10

let b = 50

let globalScope1 = {
    outerScope1: null,
    f1: 'Function',
    a1: 10,
}

f()

function f1() {
    let functionScope1 = {
        outerScope1: globalScope1,
        innerF: 'Function',
        b: 50,
    }
    console.log(a)
    let b = 50

    function innerF1() {
        let innerFunctionScope1 = {
            outerScope1: functionScope1,
            a: 0,
        }

        let a = 0
        console.log(b)
    }

    innerF1()
}

f1()
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(n: number) {
    let sumFunctionScope = {
        outerScope: globalScope,
        n: undefined //3
    }
    return function (n2: number) {
        let anonimFunctionScope = {
            outerScope: sumFunctionScope,
            n2: undefined, //6
        }
        return n + n2
    }
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0

    return function counter() {
        return count += 1
    }
}
const counter = makeCounter()
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter1(num: number) {
    let count = num

    return function counter() {
        return{
            increase: () => count += 1,
            decrease: () => count -= 1,
            reset: () => {
                count = 0
                return count
            },
            set: () => {
                count = num
                return count
        },
            getCount: () => count
        }
    }
}


// 6) sumTo(100) = 100 + 99 + .... + 1 = 5050

function sumTo(n: number) {
    let result = 0
    for (let i=n; i>0; i--) {
        result = i + n
    }
    return result
}
console.log(sumTo(100))

function sumToR(n: number): number {
    if (n === 1){
        return n
    } else {
        return n + sumToR(n - 1)
    }
}
console.log(sumToR(100))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n: number) => n
    let arg: number[] = []
    function helper(...args: number[]) {
        arg = [...arg, ...args]
        if (arg.length >= num) {
            arg.length = num
            return arg.reduce((acc, item) => acc + item)
        } else return helper
    }
    return helper
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};