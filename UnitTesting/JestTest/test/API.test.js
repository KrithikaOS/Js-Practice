const API = require("../API.js");
const database = require("../database");
var mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status: 200,
    responseText: JSON.stringify({
        ok: "true",
        data: "logged in successfully"
    })
};
var data = { email: "krithorg@gmail.com", password: "123" };

const oldXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = jest.fn(() => mockXHR);

describe("Testing API calls ", function() {

    test("client login", function(done) {
        const validUser = database.loginUser(data);
        // console.log(validUser[0]);
        // console.log(data);
        if ((validUser[0] === undefined)) {
            mockXHR.status = 400;
            mockXHR.responseText = JSON.stringify({
                ok: "false",
                data: "wrong user name or password"
            });
        } else {
            mockXHR.status = 200;
            mockXHR.responseText = JSON.stringify({
                ok: "true",
                data: "logged in successfully"
            });
        }
        const reqPromise = API.makeAjaxCall("http://localhost:8080/api/client/clientLogin", { method: "POST", request: data, async: true });
        mockXHR.onreadystatechange();
        reqPromise.then(result => {
            expect(result.data).toBe("logged in successfully");
            //expect(posts[1].title).toBe("second test post");
            done();
        }).catch(
            function(err) {
                // expect(err.data).toBe("Wrong username or password");
                console.log("Wrong user name or password ");
                done(err);
            });
    });
});