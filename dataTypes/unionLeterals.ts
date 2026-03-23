// -------------------- unions Literal -------------------------
//A variable can have only specific fixed values

let myName: string | null;
myName = null;
myName = "Usama";
// myName = undefined; //Error
// myName = 12; //Error

let myAge: number | string;
myAge = "27"; //narrowing
myAge = 27;


let userAge: number | "died" | "unknown";

userAge = 27;
userAge = "died";
userAge = "unknown";
// age = "life"; // Error


let user_name: "usama"
_name = "usama"
// _name = "rehman" // Error

// You can also define a type alias
type RawDate = boolean | string | number | undefined | null;

let data: RawDate;
type Id = number | string;
type TdMayBe = Id | undefined | null;

type Grade = "A" | "B" | "C" | "D";

interface _Student {
    stdName: string;
    stdGrade: Grade;
}

let std1: _Student = {
    stdName: "muhammd Usama",
    stdGrade: "A",  // only Raw Data grade allowed 
};