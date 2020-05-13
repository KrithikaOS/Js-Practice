// const getPost = require("../API.js");
// const mockXHR = {
//     open: jest.fn(),
//     send: jest.fn(),
//     readyState: 4,
//     responseText: JSON.stringify([
//         { title: "test post" },
//         { tile: "second test post" }
//     ])
// };
// const oldXMLHttpRequest = window.XMLHttpRequest;
// window.XMLHttpRequest = jest.fn(() => mockXHR);

// describe("API integration test suite", function() {
//     test("Should retrieve the list of posts from the server when calling getPosts method", function(done) {
//         const reqPromise = getPost.getPosts();
//         mockXHR.onreadystatechange();
//         reqPromise.then(posts => {
//             expect(posts.length).toBe(2);
//             expect(posts[0].title).toBe("test post");
//             expect(posts[1].title).toBe("second test post");
//             done();
//         });
//     });
// });