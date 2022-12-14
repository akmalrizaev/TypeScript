let age: number = 30

let sales: number = 123_456_789;
let course: string = 'TypeString';
let is_published:boolean = true;

let level = 5;

// Arrays
let arr: number[] = [1,2,3,4,5];
let arr2 = [1,2,3];

// Tuples
let user: [number, string] = [1, 'Akmal'];

// Enums
enum Size {Small=1,Medium,Large};
let mySize: Size = Size.Medium;
console.log(mySize)

// Functions
function CalculateTax(income: number): number {
    if (income < 50000)
      return income * 1.2;
    return income * 1.3;

}
console.log(CalculateTax(10000))

// Objects
let employee: {
    readonly id: number,
    name: string
} = {
    id: 1,
    name:''

}

// Type Aliases
type Employee = {
    readonly id: number,
    name: string
}

let employee2: Employee = {
    id: 1,
    name:''
}

// Union Types
function KgToLbs(weight: number | string): number {
    if (typeof weight === 'string') {
        return weight.length
    }
    return weight
}

// Literal Types
// (exact,specefic)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types

function greet(name: string | null | undefined) {
    if (name)
      console.log(name.toLocaleUpperCase());
    else 
      console.log('Hola!');  
}

greet(null)

//  The Nullish Coaelscing Operator
let speed: number | null = null;
let ride = {
    // Falsy (undefined, null,'',false,0)
    // Nullish coalescing operator
    speed: speed ?? 30
}

// The unknown Type
function render(document: unknown) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
    
}







