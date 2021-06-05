const array = [32, 212, 12, 64, 1, 94, 2]

for (let j = 0; j < array.length, 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i+1]] = [array[i+1], array[i]]
            array[i] = array[i + 1]
            array[i + 1] = temp
        }
    }
}

const strings = ["Bob", "Alex", "redux", "игорь", "Юрий", "900", "Donald"]
console.log(strings.sort())

const numbers =  [1000, 4, 8, 15, 26, 3]

/*function compareFn(a, b) {
    if(a <= b){
        return -1000
    }
    else {
        return 4
    }
}*/

const compareFn = (a, b) => a - b

console.log(numbers.sort(compareFn))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
];

console.log(students
    .sort((a, b) => a.scores - b.scores)
    .reverse()
)

console.log(students
    .sort( (a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))