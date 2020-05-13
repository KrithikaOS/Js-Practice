//export var myapi = {
export function myapiCall(url, payload) {
    var xhr = new XMLHttpRequest();
    xhr.open(payload.method, url, true);
    if (payload.method == "GET") {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(xhr.status);
                }
            }
        };

        xhr.send();
    } else {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                callback();
            }
        };

        xhr.send(JSON.stringify(data));
    }
}
//};
// },

// post: function(data, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts', true);

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             callback();
//         }
//     };

//     xhr.send(JSON.stringify(data));
// }