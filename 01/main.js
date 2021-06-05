let fv = 35
let sv = fv

console.log(fv, sv)

sv = 65
console.log(fv, sv)

const studentFirst = { //new Object() => #247
    name: "Bob",
    age: 23,
    friends: ["Al", "Don"] //new array() =>#645
}

const studentSec = {...studentFirst}  //new Object() => #248 крпия масссива, хранящееся в другой ячейке памяти, наз - копирование объекта через spread оператора
studentSec.name = "Helga"
console.log(studentFirst)
console.log(studentSec)

const copyStudent = {
    ...studentFirst,
    name: "John",
    friends: [...studentFirst.friends] //new array() =>#646
} //new Object() =>#248
const obj = {} //new Object => #249


copyStudent.friends.push("Helga")
console.log(copyStudent)
console.log(studentFirst)

// studentFirst.age = 24 // => studentFirst
const copyStudentFirst = { // =>copyStudentFirst #786
    ...studentFirst,
    age: studentFirst.age + 1
}

console.log(copyStudentFirst === studentFirst) //#786 === #247


function func(num){
    const fn = () => console.log(num)
    return [num, fn]
}
//const result = func(num: 10)
//const ten = result[0]
//const logten = result[1]

let [ten, logTen] = func(10)
//let [twelve, logTvelwe] = func(12)

console.log(logTen())