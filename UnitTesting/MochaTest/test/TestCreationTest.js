const assert = require('chai').assert;
const createTest = require('../TestCreation');
describe.skip('Create Test for User', function() {
    var time = createTest.getTime("00:01")
    it('this is a valid time', function() {
        assert.equal(time, true);
    });

    it('this is an invalid time entered', function() {
        assert.equal(time, false);
    });
});