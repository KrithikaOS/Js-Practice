"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
function add(x, y) {
    console.log("inside function add ", x + y);
    return new Promise(function (resolve, reject) {
        if (x < 0) {
            reject("x should be greater than 0");
        } else {
            resolve(x + y);
        }
    });
}
