var Multiply = require('../src/multiply')
var chai = require('chai')
var expect = chai.expect;

describe('乘法测试', () => {
    it('2 * 2=4', () => {
        expect(Multiply(2, 2)).to.be.equal(4)
    })
})