"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = loginUser;

var users = [{ email: "krithorg@gmail.com", password: "123" }, { email: "ajith@gmail.com", password: "123" }, { email: "radhika@hotmail.com", password: "456" }];

function loginUser(filter) {
    users = users.filter(function(item) {
        for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
                return false;
        }
        return true;
    });
    return users;
}