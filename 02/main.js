let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

/* const mapFn = s => {
        let name = s.name
        return name.length < 4 & name + "!" : name
 */


const mapFn = s => ({name: s.name})
const newArr = students.map(s => s.name)
/*const newArr = students.map(mapFn)
console.log(newArr) */

function map(array, func) {
    const newArr = []
    /* newArr[0] =func(array[0])
    newArr[1] =func(array[0])
    newArr[2] =func(array[0])} */

    for (let i = 0; i < array.length; i++) {
        newArr[i] = func(array[i])
    }
    return newArr
}

console.log(map(students, mapFn))

function filter(array, func) {
    const newArr = []
    for (let i = 0; i < array.length; i++){
        if(func(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}

function getMarried(st) {
    return st.isMarried
}

console.log(students.filter(getMarried))
console.log(filter(students, getMarried))

function find(array, func) {
    for (let i = 0; i< array.length; i++) {
        if(func(array[i]) === true){
            return array[i]
        }
    }
    return newArr
}
