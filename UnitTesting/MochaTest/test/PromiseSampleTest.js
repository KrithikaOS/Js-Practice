const assert = require('chai').assert;
const expect = require('chai').expect;
const addition = require('../PromiseSample');

describe.skip('Sample Promise testing ', () => {
    var result = addition.add(-1, 4);
    it('should add two numbers', (done) => {
        result.then(function(expectedResult) {
            expect(expectedResult).to.equal(3);
            done();

        }).catch(function(err) {
            done(err);
        })
    });

});

// describe('check promise test', function() {
//     var result = addition.add(1, 2);
//     it('should add two numbers', function() {
//         assert.equal(result, 3);

//     });
// });