// ================ TYPE ALIASES (Used to create custom reusable types) =================

// ---------- Raw data ---------- 

type RawData = string | number | boolean;
let multiTyped: RawData = "string";
multiTyped = 1234;
multiTyped = false;

type _Id = RawData | undefined | null;
let userId: _Id;
userId = "1234";
userId = 1234;
userId = true;
userId = null;
userId = undefined;


// OR relation (union type)
type ID = number | string;

let id: ID = "123";
id = 123;

// AND relation (intersection type) 
// & means => Combine BOTH types

type A = { name: string };
type B = { age: number };

type C = A & B; // It includes ALL properties from A AND B

let newObj: C = {
    name: "usama",
    age: 28,
}

type D = A | B; // Value can be either type A OR type B (or both)

let obj: D = { name: "Ali" }; 
let obj2: D = { age: 20 };    