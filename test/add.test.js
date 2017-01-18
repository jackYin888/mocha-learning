var Add = require('../src/add')
var chai = require('chai')

var expect = chai.expect;

describe('加法测试', () => {
    it('1 + 1 =2', () => {
        expect(Add(1, 1)).to.be.equal(2)
        expect(Add(1, 2)).to.be.equal(3)
        expect(Add(1, 3)).to.be.equal(4)

    })
})