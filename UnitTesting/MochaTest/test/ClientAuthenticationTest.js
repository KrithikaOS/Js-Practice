const assert = require('chai').assert;
const clientAuth = require('../ClientAuthentication');
//import { sayHello } from "../index";
describe.skip('check valid emailid', function() {
    var emailId = clientAuth.checkValidEmail("kritorgmail.com");
    it('valid id returns true', function() {
        assert.equal(emailId, true);
    });

    it('invalid id returns false', function() {
        assert.equal(emailId, false);
    });
});