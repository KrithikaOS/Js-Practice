// const expect = require('chai').expect;
// const nock = require('nock');

// const getTestDetails = require('../AjaxCall').makeAjaxCall;
// const response = require('./response');

// describe('Get User tests', () => {
//     beforeEach(() => {
//         const url = "/";
//         nock(url)
//             .get('/api/test/getTests')
//             .reply(200, response);
//     });

//     it('Get tests created by each user', () => {
//         return getTestDetails(url, )
//             .then(response => {
//                 //expect an object back
//                 expect(typeof response).to.equal('object');

//                 //Test result of name, company and location for the response
//                 expect(response.name).to.equal('The Octocat')
//                 expect(response.company).to.equal('GitHub')
//                 expect(response.location).to.equal('San Francisco')
//             });
//     });
// });
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
const expect = require('chai').expect;
const chai = require('chai');
const xhr = require("xmlhttprequest").XMLHttpRequest;
const sinon = require('sinon');
const nock = require('nock');
chai.should();
const ajaxCall = require('../AjaxCall');
describe('MyAPI', function() {
    beforeEach(function() {
        //ajaxCall.makeAjaxCall.http = sinon.useFakeXMLHttpRequest();
        this.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
        this.requests = [];
        this.XMLHttpRequest.onCreate = function(XMLHttpRequest) {
            this.requests.push(XMLHttpRequest);
        }.bind(this);
    });

    afterEach(function() {
        this.XMLHttpRequest.restore();
    });

    var data = { email: "ajith@gmail.com", password: "123" };
    var dataJson = JSON.stringify(data);
    var result = ajaxCall.makeAjaxCall("http://localhost:8080/api/client/clientLogin", { method: "POST", request: data, async: true });
    // var mock = nock("/test").post().reply(200, { data: dataJson });
    it('test login  request', (done) => {
        result.then(function(expectedResult) {
                console.log(expectedResult);
                // expect(expectedResult);
                //.to.equal("{ ok: true, data: { data: 'Account login successfull' } }");
                done();

            }).catch(function(err) {
                done(err);
            })
            //   this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });




    // it('should return error into callback', function(done) {
    //     myapi.get(function(err, result) {
    //         err.should.exist;
    //         done();
    //     });

    //     this.requests[0].respond(500);
    // });
});