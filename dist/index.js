"use strict";
let age = 30;
let sales = 123456789;
let course = 'TypeString';
let is_published = true;
let level = 5;
// Arrays
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];
// Tuples
let user = [1, 'Akmal'];
// Enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
// Functions
function CalculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(CalculateTax(10000));
