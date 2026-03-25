// =================== ENUM ============================
// An enum is a way to define a set of named constant values in TypeScript.

// Enum (enumeration) TypeScript ka ek feature hai jo fixed values ka group banata hai.
// Enum ek list hoti hai predefined options ki, jahan se aap sirf unhi values ko use kar sakte ho.


// ============== Numeric enums ==============

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

console.log("UP => ", Direction.UP) // 0
console.log("DOWN =>", Direction.DOWN) // 1
console.log("LEFT =>", Direction.LEFT) // 2
console.log("RIGHT =>", Direction.RIGHT) // 3



// ============== String enums ==============

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}


// ============== heterogeneous enum =========
// A heterogeneous enum is an enum that contains both string and numeric values in the same enum.

enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 2,
}



// ============== constant enum =========

enum E {
    X,
}

console.log(E.X) // 0 (Ans is 0 because it is numeric enum and if no value is assigned so its automatically assign 0)
console.log(E[0]) // X (Reverse mapping)


// Error : "Enum member must have initializer"

// enum Usama {
//     firstName = "usama",
//     LastName,
// }

// When you use a string value in an enum, then all members must have explicit values.
// TypeScript cannot auto-increment strings, so it throws an error.


const enum Enum {
    A = 1,
    B = A * 1,
}