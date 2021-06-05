const toDoListID_1 = 'jh2-7di'//vi()
const toDoListID_2 = '8ihd-edi3u' //vi()

const toDoList = [
    {
        id : toDoListID_1,
        title: 'ToDoList 1',
        filter: "all"
    },
    {
        id : toDoListID_2,
        title: 'ToDoList 2',
        filter: "all"
    }
]

const tasks = {
    [toDoListID_1] : [
        {id: "6yy-u78ui", title: "CSS", isDone: true},
        {id: "6yy-u78ui", title: "JS", isDone: true},
        {id: "6yy-u78ui", title: "HTML", isDone: true},
        {id: "6yy-u78ui", title: "React", isDone: true}
    ],
    [toDoListID_2] : [
    {id: "6yy-u78ui", title: "CSS", isDone: true},
    {id: "6yy-u78ui", title: "JS", isDone: true},
    {id: "6yy-u78ui", title: "HTML", isDone: true},
    {id: "6yy-u78ui", title: "React", isDone: true}
]
}

console.log(tasks[toDoListID_1][3].title)
console.log(tasks.user)

//reduce
let numbers = [23, 45, 35, 78, 56, 98] // одно результирующее значение
console.log(numbers.reduce((acc, el) => acc + el, 0))
console.log(numbers.reduce((acc, el) => acc > el ? acc :el))

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

console.log(students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.reduce((acc, el) => {
    if (el.name === 'Bob'){
        acc = el
    }
    return acc
}, null))

console.log(students.reduce((acc, el) => {
    if (el.isMarried){
        acc = push.el
    }
    return acc
}, []))

console.log(students.reduce((acc, el) => {
    acc.push(el.name)
    return acc
}, []))