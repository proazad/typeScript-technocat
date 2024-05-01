"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spreed operator
    // rest operator
    // learn Spreed Operator
    var bros1 = ["Rahim", "Karim", "Malek"];
    var bros2 = ["Hanif", "Jamal", "Kamal"];
    var brosList = bros1.push.apply(bros1, bros2);
    var mentors1 = {
        typeScript: "Mesba",
        redux: "Mir",
        dbms: "Nahid",
    };
    var mentors2 = {
        nextjs: "Tanmoy",
        cloud: "Firoz",
        express: "Babul",
    };
    var mentorList = __assign(__assign({}, mentors1), mentors2);
    var greetDeveloper = function (dev1, dev2, dev3) {
        console.log("Hi, ".concat(dev1, " ").concat(dev2, " ").concat(dev3));
    };
    var greetMentor = function () {
        var mentors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mentors[_i] = arguments[_i];
        }
        mentors.forEach(function (mentor) { return "Hi, ".concat(mentor); });
    };
    var greet = greetMentor("Kamal", "Jamal", "Dhamal");
}
