const assert = require('chai').assert;
const sayHello = require('../index.babel');
//import { sayHello } from "../index";
describe.skip('index returns hello', function() {
    it('should return hello', function() {
        assert.equal(sayHello.sayHello(), 'hello');
    });
});