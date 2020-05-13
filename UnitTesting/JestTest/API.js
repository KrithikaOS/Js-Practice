"use strict";
// const API_ROOT = "http://jsonplaceholder.typicode.com";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeAjaxCall = makeAjaxCall;

function makeAjaxCall(url, payload) {
    if (!url) throw new Error("Invalid url to make ajax request");
    if (!payload) throw new Error("Invalid Payload");
    if (!payload.method) throw new Error("Invalid Method");
    if (payload.method == "POST" && !payload.request) throw new Error("POST method requires input from user");
    return new Promise(function(resolve, reject) {
        var method = payload.method;
        if (typeof payload.request == "string") {
            url += payload.request;
        }
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("API-KEY", "QUIZ_APP_KEY_78194260");
        if (method == "GET") {
            console.log("inside get");
            xhr.send();
        } else if (method == "POST") {
            console.log("inside post");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(payload.request));
        } else if (method == "HEAD") {

            console.log("inside head");
            xhr.send();
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("XHR call done successfully");
                    var resp = xhr.responseText;
                    var isJsonCheck = isJsonString(resp);
                    if (isJsonCheck == true) {
                        var respJson = JSON.parse(resp);
                        console.log(respJson);
                        resolve(respJson);
                    } else {
                        console.log(resp)
                        resolve(resp);
                    }
                } else {
                    reject(xhr.status);
                    console.log("XHR failed");
                }
            } else {
                console.log("XHR processing going on");
            }
        };
    });
}

function isJsonString(str) {
    try {
        var obj = JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// xhr.open("GET", `${API_ROOT}/posts`);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         const resp = JSON.parse(xhr.responseText);
//         if (resp.error) {
//             reject(resp.error);
//         } else {
//             resolve(resp);
//         }
//     }
// };
// xhr.send();