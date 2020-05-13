// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var ajaxfn = require("../MockFinal");
// jest.mock('xmlhttprequest');
// it('login in check', (done) => {
//     var data = { email: "ajith@gmail.com", password: "123" };
//     //jest.fn(() => Promise.resolve({ "ok": true }));
//     let xhrMock = {
//         open: jest.fn(),
//         setRequestHeader: jest.fn(),
//         onreadystatechange: jest.fn(),
//         send: jest.fn(),
//         readyState: 4,
//         responseText: { "ok": true },
//         status: 200
//     }

//     window.XMLHttpRequest = jest.fn(() => xhrMock)
//     xhrMock.onreadystatechange()
//         //ajaxfn.post.mockResolvedValue({ data: { email: "krith@gmail.com", password: "123" } });
//     ajaxfn.makeAjaxCall("http://localhost:8080/api/client/clientLogin", { method: "POST", request: data, async: true }).then(function(expectedResult) {
//         console.log(expectedResult);

//         done();

//     }).catch(function(err) {
//         done(err);
//     })

// });