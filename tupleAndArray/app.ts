// =========== TUPLE AND ARRAY ================

// === ARRAY (Arrays where all elements must follow a specific type) ===
let num: number[] = [2, 3, 4, 5]
let city: string[] = ["karachi", "lahore", "islamabad"]

// num.push("6") // Not Allowed (only same type element are allowed)
console.log(num)

// === Alternating Syntax (Generic Syntax) ===
let marks: Array<number> = [10, 20, 30, 40]

// ===== TUPLE (An array with fixed length + fixed types + fixed order) ======

let tupleArr: [number, string, boolean, undefined, null, string] = [10, "usama", true, undefined, null, "karachi"];

tupleArr.push("extra"); // allowed (but not recommended)
console.log(tupleArr)


// ----------- Tuple with Optional Values -------------------

let stdDetail: [string, number?, boolean?];

stdDetail = ["rehman"]            // valid
stdDetail = ["usama", 70, true]   // valid

let xyPoint: readonly [number, number] = [10, 20];

// xyPoint[0] = 40; // Error (readonly)


// ---------------- Tuple in function return -------------------------

function tupleFunc(name: string, age: number): [string, number] {
    return [name, age]
}

const tupleCall = tupleFunc("usama", 28)
console.log(tupleCall[0]) // usama
console.log(tupleCall[1]) // 28

// ---------------- Destructuring Tuple --------------------

let [name, age] = tupleCall;

// ---------------- Tuple with Array Inside ----------------

let tupleInsideArr: [string, number[], boolean];
tupleInsideArr = ["usama", [1, 2, 3, 4, 5], true];

// ----------------- Tuple vs Array Difference -------------

let array: (string | number)[] = ["muhammad", 28, "usama"];

let tuple: [string, number, string] = ["muhammad", 28, "usama"];
tuple.push(undefined) // Allowed

// Logically WRONG (tuple should not grow)
// But TypeScript may NOT throw error (in some cases)
// It is no longer [string, number, boolean] => tuple is broken

// Use readonly tuple (BEST way)

let newTuple: readonly [string, number, boolean] = ["usama", 28, true]
// newTuple.push("karachi") // not Allowed throw error