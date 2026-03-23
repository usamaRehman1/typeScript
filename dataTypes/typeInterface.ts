// ============ TYPE INTERFACE (Used to define structure of objects) ==========

interface Student {
    stdName: string,
    stdId: number,
    isPassOut: boolean,
}

let student: Student = {
    stdName: "usama",
    stdId: 1234,
    isPassOut: true,
}

// ======================== Optional + Readonly ============================

interface Teacher {
    name: string,
    isGovtEmploy: boolean,
    age?: number, // optional (This property is not required)
    readonly id: number, // readonly (This property cannot be changed after initialization)
}

const physicsTeacher: Teacher = {
    name: "muhammad usama",
    age: 28,
    isGovtEmploy: false,
    id: 12345,
}

physicsTeacher.name = "rehman"
// physicsTeacher.id = 202 // Error

console.log(physicsTeacher)
// ================== Extending Interface ============================

interface Person {
    name: string,
}

interface Std extends Person {
    grade: string,
}