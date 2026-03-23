// =================== Function Types ====================

// Basic Function 
function basicFun(a: number, b: number): number {
    return a + b
}
basicFun(2, 3);

// Function Type As Variable
let FunTypeAsVariable: (num1: number, num2: number) => number;

FunTypeAsVariable = (num1, num2) => num1 * num2;
FunTypeAsVariable(5, 4);

// Optional Parameters
function greet(name: string, age?: number): string {
    return `Welcome ${name}`
}
greet("usama")

// Optional parameter should be at the end
// function testFunc(age?: number, name: string) { } // Error

// ========== Default Parameters ===========

function sum(a: number, b: number = 10) {
    return a * b
}
sum(5) // 50
sum(5, 2) // 10


// ========== Return Types ===========

// Must retuen number
const sq = (a: number): number => {
    return a ** 2
}

// Must return string
function fullName(firstName: string, lastName: string): string {
    return firstName + lastName
}

// Void (No Return)
function voidFunc(name: string): void {
    console.log("Heloo" + name)
}

// Never  (A function never returns anything because it never finishes normally)

function neverFunc(): never {
    while (true) {
        console.log("Never finish this function")
    }
}

function throwError(): never {
    throw new Error("Somthing went Wrong");
}