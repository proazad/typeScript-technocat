"use strict";
// learning Function
// default Funciton
// Arrow Function
function add(num, num2) {
    if (num === void 0) { num = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num + num2;
}
var sum = add(3, 5);
var addArrow = function (num, num2) {
    if (num === void 0) { num = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num + num2;
};
// Object => Funciton => Method
var poorUser = {
    name: "Mesbaul Abedin Persian",
    balance: 0,
    addBalance: function (balance) {
        return "My New Balance is ".concat(this.balance + balance);
    },
};
var sqNumber = [1, 3, 4, 5];
var squareNumber = sqNumber.map(function (element) { return element * element; });
