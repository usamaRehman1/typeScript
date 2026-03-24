// ========== TYPE INFERENCE (Implicit => typeScript automatically detects types) =========
// “TypeScript understands the type from the value you assign.”

// Infering Types,
// take your cursor on the variable name or funtion name

let _name = "muhammad usama";
let age = 28;

function addNum(a: number, b: number) {
    return a + b + ""
}

console.log(addNum(10, 5)) 