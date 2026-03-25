// ============== OBJECT AND INTERFACES ============

interface Person {
    name: string,
    age: number,
}

let user: Person = {
    name: "usama",
    age: 28,
}

console.log(user["name"]) // usama
console.log(user.age) // 28

// ------------- Opetional & Readonly Propertry -----------

interface Student extends Person {
    readonly id: number,
    email?: string,
}

let std1: Student = {
    name: "usama",
    age: 28,
    id: 123,
}

std1.name = "muhammad"
// std1.id = 433  // Error : Cannot assign to 'id' because it is a read-only property


// -------- Important Rule: Structure is Fixed ------------ 

std1.name = "rehman";
std1.age = 27;
// std1.city = "karachi"  // city was not in inferred type


// ------- Object Inference vs any ----------

let newUser;  // Here TypeScript infers: any type 
newUser = {
    name: "usama",
}

// This property was not part of the original object structure
newUser.age = 28

// Not a TypeScript compile error
// But editor warning (best practice hint)

