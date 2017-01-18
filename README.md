#### mocha-learning
> describe() 测试套件

> it 测试用例

#### example
<code>
<pre>
describe('加法测试', () => {
    it('1 + 1 =2', () => {
        expect(Add(1, 1)).to.be.equal(2)
        expect(Add(1, 2)).to.be.equal(3)
        expect(Add(1, 3)).to.be.equal(4)
    })
})
</pre>
</code>

#### todo
* 异步测试