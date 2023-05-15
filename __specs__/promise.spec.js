const {expect} = require('chai')

describe('promise specs', () => {
  it('spec 1 Promises and async functions', async () => {
    const startTime = Date.now()

    function first() {
      return new Promise((res) => setTimeout(() => res('first'), 100))
    }

    function second() {
      return new Promise((res) => setTimeout(() => res('second'), 200))
    }

    function third() {
      return new Promise((res) => setTimeout(() => res('third'), 250))
    }

    async function executeFunctionsInParallel() {
      // implementation
    }

    expect(await executeFunctionsInParallel(first, second, third))
      .to
      .eql(['first', 'second', 'third'])

    expect(Date.now() - startTime < 300).to.eql(true)
  })
})
